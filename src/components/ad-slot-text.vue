
<template>
  <div class="ad-slot-text-wrap">
    <div class="ad-slot-text-main" v-if="!isEmpty">
      <div :id="id"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { AdMaster } from '../ad-master/AdMaster'

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
  },
  data () {
    return {
      isEmpty: false,
      id: AdMaster.generateId()
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
    this.initAdSlot()
  },
  methods: {
    async initAdSlot() {
      this.id = AdMaster.generateId()
      await this.$nextTick()
      const adConfig = AdMaster.getAdUnit(this.adUnitKey)
      const adMaster = new AdMaster(this.id, adConfig.adUnit, {
        size: adConfig.size,
        keyValue: this.currentKeyValue,
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
