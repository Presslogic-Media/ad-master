
<template>
  <div
    v-if="!hidden"
    :data-key="adUnitKey"
    :class="['ad-slot-wrap', { 'is-empty': isEmpty, 'is-fit': isFit }]"
    :style="{ '--bg': currentBg }">
    <div
      :class="['ad-slot-main']">
      <small class="ad-slot-title" v-if="adTitle && !isFit">{{ adTitle }}</small>
      <div :id="id"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { AdMaster, InterObserver } from '../ad-master/AdMaster'

export default {
  props: {
    /** 广告的别名key */
    adUnitKey: {
      type: String,
      default: 'M1'
    },
    /** 广告的提示标题 */
    adTitle: {
      type: String,
      default: '廣告'
    },
    /**
     * 是否需要背景 或者 设置背景的颜色 
     */
    background: {
      type: [Boolean, String],
      default: true
    },
    /**
     * 是否为sponor广告
     */
    isSponsor: {
      type: Boolean,
      default: false
    },
    /**
     * 展示的样式
     */
    mode: {
      type: String,
      default: 'normal',
      validator: (mode) => ['fit', 'normal'].includes(mode)
    },
    /**
     * 广告空了是否隐藏dom
     */
    emptyHidden: {
      type: Boolean,
      default: false
    },
    /**
     * 广告位级别的key-value
     */
    keyValue: {
      type: Object,
      default: () => ({})
    },
    /**
     * 预加载距离
     */
    rootMargin: {
      type: String,
      default: '500px'
    }
  },
  computed: {
    /** 只展示广告的内容 */
    isFit() {
      return this.mode === 'fit'
    },
    currentBg() {
      if (typeof this.background === 'boolean') {
        return this.background ? '#f0f0f0' : 'transparent'
      }
      return this.background
    },
    /** 当前广告位的配置 */
    adUnitConfig() {
      return AdMaster.getAdUnit(this.adUnitKey)
    },
    /** 当前广告位的key-value */
    currentKeyValue() {
      return Object.assign({}, this.adUnitConfig.keyValue || {}, this.keyValue)
    }
  },
  data () {
    return {
      isEmpty: false,
      id: AdMaster.generateId(),
      adMaster: null,
      hidden: false
    }
  },
  mounted() {
    const config = AdMaster.getAdUnit(this.adUnitKey)
    if (!config) return
    if (config.lazy) {
      this.initLazyLoad()
    } else {
      this.initAdSlot()
    }
    // this.initAdSlot()
  },
  beforeDestroy() {
    this.adMaster?.destroySlots()
  },
  methods: {
    /** 懒加载 */
    initLazyLoad () {
      if (this.adMaster) return
      const observer = new InterObserver(this.$el, { rootMargin: this.rootMargin })
      observer.bindObserver(() => {
        this.initAdSlot()
      })
    },
    async initAdSlot() {
      this.id = AdMaster.generateId()
      await this.$nextTick()
      let adConfig = AdMaster.getAdUnit(this.adUnitKey)
      if (!adConfig) return
      /** sponsor 广告 */
      if (this.isSponsor && adConfig.sponsor) {
        adConfig = adConfig.sponsor
      }
      const adUnit = adConfig.adUnit
      const size = adConfig.size
      const passback = adConfig.passback
      this.adMaster = new AdMaster(this.id, adUnit, {
        size,
        keyValue: this.currentKeyValue,
        disabled: adConfig.disabled,
        hooks: {
          slotRenderEnded: (evt) => {
            if (evt.isEmpty && !passback && this.emptyHidden) {
              this.isEmpty = evt.isEmpty
              this.handleHiddenAdSlot()
            }
            /** passback */
            if (evt.isEmpty && passback) {
              this.adMaster.destroySlots()
              this.id = AdMaster.generateId()
              this.$nextTick(() => {
                this.adMaster = new AdMaster(this.id, passback.adUnit, {
                  size: passback.size,
                  keyValue: this.currentKeyValue,
                  disabled: adConfig.disabled,
                  hooks: {
                    slotRenderEnded: (evt) => {
                      this.isEmpty = evt.isEmpty
                      this.adMaster.setAdUnitKey(`${this.adUnitKey}-passback`)
                      if (evt.isEmpty && this.emptyHidden) this.handleHiddenAdSlot()
                      console.log(`=====> passback ${this.isEmpty ? 'error' : 'success'}`)
                      this.$emit("renderEnded", Object.assign({passback: true}, evt))
                    }
                  }
                })
                this.adMaster.passback = true
              })
            }else{
              this.$emit("renderEnded", evt)
            }
          }
        }
      })
      this.adMaster.setAdUnitKey(this.adUnitKey)
    },
    async handleHiddenAdSlot() {
      this.adMaster.destroySlots()
      await this.$nextTick()
      this.hidden = true
    }
  }
}
</script>

<style lang="scss" scoped>
.ad-slot-wrap {
  background-color: var(--bg);
  .ad-slot-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding-top: 12px;
    padding-bottom: 24px;
    
  }
  .ad-slot-title {
    display: flex;
    justify-content: center;
    font-size: 12px;
    line-height: 35px;
    margin-bottom: 12px;
  }
  &.is-empty, &.is-fit {
    background-color: transparent;
    .ad-slot-main {
      padding: 0;
    }
  }
}
</style>
