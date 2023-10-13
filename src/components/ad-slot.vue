
<template>
  <div class="ad-slot-wrap" :style="{ '--bg': currentBg }">
    <div class="ad-slot-main">
      <small class="ad-slot-title">{{ advertisingText }}</small>
      <div :id="id"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { AdMaster } from '../ad-master/AdMaster'

export default {
  props: {
    adUnitKey: {
      type: String,
      default: 'M1'
    },
    advertisingText: {
      type: String,
      default: '廣告'
    },
    /**
     * 是否需要背景 或者 设置背景的颜色 
     */
    background: {
      type: [Boolean, String],
      default: true
    }
  },
  computed: {
    currentBg() {
      if (typeof this.background === 'boolean') {
        return this.background ? '#f0f0f0' : 'transparent'
      }
      return this.background
    }
  },
  data () {
    return {
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
      })
      console.log('adSlot adMaster: ', adMaster)
    }
  }
}
</script>

<style lang="scss" scoped>
.ad-slot-wrap {
  padding-top: 12px;
  padding-bottom: 24px;
  background-color: var(--bg);
  .ad-slot-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }
  .ad-slot-title {
    display: flex;
    justify-content: center;
    font-size: 12px;
    line-height: 35px;
    margin-bottom: 12px;
  }
}
</style>
