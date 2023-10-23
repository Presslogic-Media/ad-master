
<template>
  <div class="ad-slot-text-wrap">
    <div class="ad-slot-text-main" v-if="!isEmpty">
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
      default: 'feng-test-ad-unit'
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
      default: '50px'
    }
  },
  data () {
    return {
      isEmpty: false,
      id: AdMaster.generateId(),
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
    if (!this.adUnitConfig) return
    if (this.adUnitConfig.lazy) {
      this.initLazyLoad()
    } else {
      this.initAdSlot()
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
      const adConfig = AdMaster.getAdUnit(this.adUnitKey)
      this.adMaster = new AdMaster(this.id, adConfig.adUnit, {
        size: adConfig.size,
        keyValue: this.currentKeyValue,
        disabled: adConfig.disabled,
        hooks: {
          slotRenderEnded: (evt) => {
            this.isEmpty = evt.isEmpty
          }
        }
      })
      // console.log('adSlot adMaster: ', adMaster)
    }
  }
}
</script>

<style lang="scss" scoped>
.ad-slot-text-wrap {
  .ad-slot-text-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding-top: 12px;
    //padding-bottom: 24px;
    ::v-deep iframe {
      width: 100vw;
      height: auto;
      a {
        color: red;
      }
    }
  }
}
</style>
