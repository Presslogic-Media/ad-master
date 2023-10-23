<template>
    <div
        :data-key="adUnitKey"
        class="ad-slot-script-wrap">
        <div :id="id"></div>
    </div>
</template>

<script lang="ts">
import { AdMaster, AdMasterGlobal, InterObserver } from '../ad-master/AdMaster'

export default {
  props: {
    /** 广告的别名key */
    adUnitKey: {
      type: String,
      default: ''
    },
    /** 是否为自定义广告 */
    isSponsor: {
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
      default: '0px'
    }
  },
  data () {
    return {
      isEmpty: false,
      id: '',
      adMaster: null
    }
  },
  computed: {
    /** 当前广告位的配置 */
    adUnitConfig() {
      return AdMaster.getAdUnit(this.adUnitKey)
    },
    /** 当前广告位的key-value */
    currentKeyValue() {
      return Object.assign({}, this.adUnitConfig.keyValue || {}, this.keyValue)
    }
  },
  mounted() {
    if (!AdMasterGlobal.disabledScript) {
      if (!this.adUnitConfig) return
      if (this.adUnitConfig.lazy) {
        this.initLazyLoad()
      } else {
        this.initAdSlot()
      }
    }
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
      this.adMaster = new AdMaster(this.id, adConfig.adUnit, {
        size: adConfig.size,
        keyValue: this.currentKeyValue,
        disabled: adConfig.disabled,
        hooks: {
          slotRenderEnded: (evt) => {
            this.isEmpty = evt.isEmpty
            this.$emit("renderEnded", evt)
          }
        }
      })
      this.adMaster.setAdUnitKey(this.adUnitKey)
    }
  }
}
</script>

<style lang="scss" scoped>
.ad-slot-script-wrap {
    display: flex;
    justify-content: center;
    width: 1px;
    height: 0px;
}
</style>