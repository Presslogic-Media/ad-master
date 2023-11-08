<template>
    <div
        :data-key="adUnitKey"
        :class="['ad-slot-script-wrap', { 'no-space': noSpace }]">
        <div :id="id"></div>
    </div>
</template>

<script lang="ts">
import { AdMaster, AdMasterGlobal } from '../ad-master/AdMaster'
import AdSlotBase from './ad-slot-base.vue'

export default {
  name: 'ad-slot-script',
  extends: AdSlotBase,
  props: {
    /**
     * 不占位置的script广告
     */
    noSpace: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      isEmpty: false,
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
  methods: {
    /**
     * 初始化函数, 继承于AdSlotBase的必要条件
     */
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
    // display: flex;
    // justify-content: center;
    &.no-space {
      width: 1px;
      height: 0px;
    }
}
</style>