
<template>
  <div class="ad-slot-wrap" :style="{ '--bg': currentBg }">
    <div class="ad-slot-main" v-if="!isEmpty">
      <small class="ad-slot-title" v-if="adTitle">{{ adTitle }}</small>
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
}
</style>
