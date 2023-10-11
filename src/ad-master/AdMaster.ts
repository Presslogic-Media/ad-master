import loadScript from 'load-script'
import merge from 'deepmerge'
import { IConfig, GlobalHooksCallbackMap, IHooksCallbackItem, Size, IHooksCallbackMap, HooksKeys, LogList, ILogItem, ELogType, ELoStatus, IHooksCallbackFunc, KeyValue, AdUnitConfig } from './types/index'
import { randomId } from './utils'

// 参考文档: https://developers.google.com/publisher-tag/reference?hl=zh-cn
// example: https://developers.google.com/publisher-tag/samples?hl=zh-cn

/**
 * 广告日志
 */
class Logger {
  private name = ''
  /** 存放执行的log */
  private logData: LogList = []
  private adMaster: AdMaster | null = null

  constructor(name: string) {
    this.name = name
  }

  setAdMaster (adMaster: AdMaster) {
    this.adMaster = adMaster
  }

  setLog(data: ILogItem) {
    const defaultLog = {
      type: ELogType.console,
      status: ELoStatus.log,
    }
    const logData = Object.assign(defaultLog, data)
    if (logData.status === ELoStatus.error) {
      console.error(`------ Logger -------${this.adMaster?.adSlotId}----${logData.title}`)
    }
    this.logData.push(logData)
  }
}

/**
 * 存储全局配置的单例
 */
class AdMasterGlobal {
  private static instance: AdMasterGlobal
  private config: IConfig = {}
  /** 存放全局的 slotRenderEnded hooks */
  static globalHooksCallbackMap: GlobalHooksCallbackMap<HooksKeys> = {}
  /** 存储全部 AdMaster 实例 */
  static globalAllAdMaster: AdMaster[] = []

  static logger = new Logger('Global Log')

  adUnitMap: AdUnitConfig  = {}

  private constructor(options: IConfig = {}) {
    this.config = options
  }

  /** 获取当前全局的广告配置 */
  getConfig(): IConfig {
    return this.config
  }

  setAdUnitMap(map: AdUnitConfig) {
    this.adUnitMap = map
  }

  static getInstance(options?: IConfig): AdMasterGlobal {
    if (!AdMasterGlobal.instance) {
      AdMasterGlobal.instance = new AdMasterGlobal(options)
    }
    return AdMasterGlobal.instance
  }

  static initGoogletagCmd() {
    if (window.googletag) return
    window.googletag = window.googletag || { cmd: [] } as any
  }

  /** 加载 gpt.js */
  static loadGpt() {
    AdMasterGlobal.logger.setLog({
      type: ELogType.loadScript,
      title: '加载gpts.js',
    })
    AdMasterGlobal.initGoogletagCmd()
    return new Promise((resolve, reject) => {
      loadScript('https://securepubads.g.doubleclick.net/tag/js/gpt.js', (err, _script) => {
        if (err) {
          console.error('gpt.js load error!!!')
          reject(err)
        } else {
          console.log('load success!!')
          resolve(true)
        }
      })
    })
  }

  /** 设置 local hooks */
  static setHooks (id: string, key: HooksKeys, callback: IHooksCallbackItem<HooksKeys>) {
    const currentMap = AdMasterGlobal.globalHooksCallbackMap[id]
    if (currentMap) {
      currentMap[key] = callback
    } else {
      AdMasterGlobal.globalHooksCallbackMap[id] = {
        [key]: callback
      }
    }
  }

  static enabledSlotRenderEnded(callback?: (event: googletag.events.SlotRenderEndedEvent) => void) {
    if (!googletag) {
      console.error('googletag not exist!')
      return
    }
    googletag.cmd.push(() => {
      googletag.pubads().addEventListener('slotRenderEnded', (evt) => {
        const slotId = AdMaster.getSlotEleId(evt.slot)
        const localSlotRenderEnded = AdMasterGlobal.globalHooksCallbackMap[slotId]?.slotRenderEnded
        localSlotRenderEnded?.(evt)
        callback?.(evt)
      })
    })
  }

  static enabledImpressionViewable(callback?: (event: googletag.events.ImpressionViewableEvent) => void) {
    if (!googletag) {
      console.error('googletag not exist!')
      return
    }
    googletag.cmd.push(() => {
      googletag.pubads().addEventListener('impressionViewable', (evt) => {
        const slotId = AdMaster.getSlotEleId(evt.slot)
        const localImpressionViewable = AdMasterGlobal.globalHooksCallbackMap[slotId]?.impressionViewable
        localImpressionViewable?.(evt)
        callback?.(evt)
      })
    })
  }
}

/**
 * 直译为 广告大师
 * 实例具有广告的基础能力
 */
class AdMaster {
  /** 全局配置 */
  static globalConfig: IConfig = {}
  /** 局部配置 */
  private localConfig: IConfig = {}
  /** 广告插槽对象 */
  private adSlot!: googletag.Slot
  /** 广告的唯一ID */
  adSlotId = ''
  /** 广告单元 */
  private adUnit = ''
  /** 是否开启adsense测试模式 */
  private adsenseTestMode = true
  /** 是否展示受限广告 https://developers.google.com/publisher-tag/samples/display-limited-ad?hl=zh-cn */
  private limitedAds = false
  /** log实例 */
  logger!: Logger
  private globalConfig: IConfig = {}

  private impressionViewable = false
  private isEmpty = false
  private adsenseUnfilled = false

  /** 当前广告的配置数据 */
  get config (): IConfig {
    return merge(this.globalConfig, this.localConfig)
  }

  get keyValue (): KeyValue  {
    return this.localConfig.keyValue || this.globalConfig.keyValue || {}
  }

  /** 当前networkCode */
  get networkCode() {
    return this.localConfig.networkCode || this.globalConfig.networkCode
  }

  /** 广告单元路径 */
  get adUnitPath() {
    return `/${this.networkCode}/${this.adUnit}`
  }

  /** 当前广告尺寸 */
  get size () {
    const defaultSize: Size  = [300, 250]
    return this.config.size || defaultSize
  }

  /** div 容器 */
  get adSlotWrap () {
    return document.querySelector(`#${this.adSlotId}`)
  }

  constructor(id: string, adUnit: string, config: IConfig = {}) {
    this.adSlotId = id
    this.adUnit = adUnit
    this.localConfig = config
    const globalConfig = AdMasterGlobal.getInstance().getConfig()
    this.globalConfig = globalConfig
    this.logger = new Logger(`AdMaster logger - ${this.adSlotId}`)
    this.logger.setAdMaster(this)
    this.initHooks()
    this.initAdSlot()
    AdMasterGlobal.globalAllAdMaster.push(this)
  }

  /**
   * 初始化广告位
   */
  initAdSlot() {
    const id = this.adSlotId
    googletag.cmd.push(() => {
      /** 开启 adsense 测试模式 */
      if (this.adsenseTestMode) {
        googletag.pubads().set('adsense_test_mode', 'on')
      }
      if (this.limitedAds) {
        googletag.pubads().setPrivacySettings({
          limitedAds: this.limitedAds
        });
      }

      this.adSlot = googletag
        .defineSlot(this.adUnitPath, this.size, id)
        ?.addService(googletag.pubads()) as googletag.Slot

      /** 设置key-value */
      Object.entries(this.keyValue).forEach(item => {
        const [key, value] = item
        this.adSlot?.setTargeting(key, value)
      })

      /** 影响 ad exchange 广告的填充率 */
      googletag.pubads().set('page_url', this.config.pageUrl || '')
      // googletag.pubads().set('page_url', 'https://businessfocus.io')

      googletag.enableServices()
    })
    const logger = this.logger
    /** 发起广告请求 */
    googletag.cmd.push(function () {
      logger.setLog({
        title: 'googletag.display'
      })
      googletag.display(id)
    })
  }

  /**
   * 获取广告位的 element id
   * @param slot 广告位数据
   * @returns string
   */
  static getSlotEleId(slot: googletag.Slot) {
    return slot.getSlotElementId()
  }

  private handleSlotRenderEnded: IHooksCallbackFunc<'slotRenderEnded'> = (evt) => {
    const { isEmpty } = evt
    if (isEmpty) {
      this.logger.setLog({
        status: ELoStatus.error,
        title: 'adSlot isEmpty!!!'
      })
      this.isEmpty = true
    }
  }

  private handleImpressionViewable: IHooksCallbackFunc<'impressionViewable'> = () => {
    this.impressionViewable = true
    this.logger.setLog({
      title: 'ImpressionViewable'
    })
  }

  initHooks() {
    /** hooks 映射表 */
    const hooksMap: IHooksCallbackMap<HooksKeys> = {
      slotRenderEnded: this.handleSlotRenderEnded.bind(this),
      impressionViewable: this.handleImpressionViewable.bind(this),
    }
    Object.entries(hooksMap).forEach((item) => {
      const key = item[0] as HooksKeys
      const callback = item[1] as IHooksCallbackFunc<HooksKeys>
      AdMasterGlobal.setHooks(this.adSlotId, key, evt => {
        callback(evt)
        const hooks = this.config.hooks
        const hooksItem = hooks?.[key] as IHooksCallbackFunc<HooksKeys>
        hooksItem?.(evt)
      })
    })
  }

  destroySlots() {
    googletag.destroySlots([this.adSlot])
    if (this.adSlotWrap) {
      this.adSlotWrap.innerHTML = ''
    }
  }

  setAdsenseFilledStatus(status: boolean) {
    this.adsenseUnfilled = !status
  }

  enableAutoFrefresh(time = 5000) {
    return setInterval(() => {
      googletag.cmd.push(() => {
        googletag.pubads().refresh([this.adSlot])
      })
    }, time)
  }

  static generateId () {
    return 'ad-id-' + randomId(6)
  }

  /** 获取对应的广告位配置 */
  static getAdUnit(key: string) {
    const adMasterGlobal = AdMasterGlobal.getInstance()
    return adMasterGlobal.adUnitMap?.[key] || null
  }
}

/**
 * 广告进入监控
 */
class InterObserver {
  target: Element
  observer!: IntersectionObserver
  callback: any
  isEntered = false
  options: IntersectionObserverInit = {
    rootMargin: '100px',
    // threshold: [0.1, 0.2, 0.5, 0.8, 0.9, 1],
  }

  constructor(ele: Element) {
    this.target = ele
    this.initObser()
  }

  initObser() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!this.isEntered) {
            this.callback()
            this.isEntered = true
          }
        }
      })
    }, this.options)
    this.observer.observe(this.target)
  }

  bindObserver(callback: () => void) {
    this.callback = callback
  }

  destory() {
    this.observer.unobserve(this.target)
    this.observer.disconnect()
  }
}

export { AdMasterGlobal, AdMaster, InterObserver }
