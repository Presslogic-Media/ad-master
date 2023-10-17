<template>
    <div class="ad-slot-script-wrap" :id="id"></div>
</template>

<script lang="ts">
import { AdMaster, AdMasterGlobal } from '../ad-master/AdMaster'

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
    }
  },
  data () {
    return {
      isEmpty: false,
      id: AdMaster.generateId()
    }
  },
  mounted() {
    console.log(1111, AdMasterGlobal.disabledScript)
    if (!AdMasterGlobal.disabledScript) {
        this.initAdSlot()
    }
  },
  methods: {
    async initAdSlot() {
      this.id = AdMaster.generateId()
      await this.$nextTick()
      let adConfig = AdMaster.getAdUnit(this.adUnitKey)
      /** sponsor 广告 */
      if (this.isSponsor && adConfig.sponsor) {
        adConfig = adConfig.sponsor
      }
      const adMaster = new AdMaster(this.id, adConfig.adUnit, {
        size: adConfig.size,
        hooks: {
          slotRenderEnded: (evt) => {
            this.isEmpty = evt.isEmpty
          }
        }
      })
      adMaster.setAdUnitKey(this.adUnitKey)
      console.log('adSlot script adMaster: ', adMaster)
    }
  }
}
</script>

<style lang="scss" scoped>
.ad-slot-script-wrap {
    display: flex;
    justify-content: center;
}
</style>