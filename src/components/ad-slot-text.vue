
<template>
  <div class="ad-slot-wrap">
    <div class="ad-slot-main" v-if="!isEmpty">
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
  },
  data () {
    return {
      isEmpty: false,
      id: AdMaster.generateId()
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
        hooks: {
          slotRenderEnded: (evt) => {
            this.isEmpty = evt.isEmpty
          }
        }
      })
      console.log('adSlot adMaster: ', adMaster)
    }
  }
}
</script>

<style lang="scss" scoped>
.ad-slot-wrap {
  .ad-slot-main {
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
