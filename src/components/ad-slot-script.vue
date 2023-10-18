<template>
    <div
        :data-key="adUnitKey"
        class="ad-slot-script-wrap">
        <div :id="id"></div>
    </div>
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
      id: ''
    }
  },
  mounted() {
    if (!AdMasterGlobal.disabledScript) {
        this.initAdSlot()
    }
  },
  methods: {
    async initAdSlot() {
      this.id = AdMaster.generateId()
      await this.$nextTick()
      let adConfig = AdMaster.getAdUnit(this.adUnitKey)
      if (!adConfig) return
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