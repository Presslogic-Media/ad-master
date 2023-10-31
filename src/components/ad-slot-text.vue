
<template>
  <div class="ad-slot-text-wrap">
    <div class="ad-slot-text-main">
      <div :id="id"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { AdMaster } from '../ad-master/AdMaster'
import AdSlotBase from './ad-slot-base.vue'

export default {
  name: 'ad-slot-text',
  extends: AdSlotBase,
  props: {
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
    }
  },
  methods: {
    /**
     * 初始化函数, 继承于AdSlotBase的必要条件
     */
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
