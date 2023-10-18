
<template>
  <div
    :data-key="adUnitKey"
    :class="['ad-slot-wrap', { 'is-empty': isEmpty, 'is-fit': isFit }]"
    :style="{ '--bg': currentBg }">
    <div
      :class="['ad-slot-main']">
      <small class="ad-slot-title" v-if="adTitle && !isFit">{{ adTitle }}</small>
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
    },
    /**
     * 是否为sponor广告
     */
    isSponsor: {
      type: Boolean,
      default: false
    },
    mode: {
      type: String,
      default: 'normal',
      validator: (mode) => ['fit', 'normal'].includes(mode)
    }
  },
  computed: {
    /** 只展示广告的内容 */
    isFit() {
      return this.mode === 'fit'
    },
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
      id: AdMaster.generateId(),
      adMaster: null
    }
  },
  mounted() {
    const config = AdMaster.getAdUnit(this.adUnitKey)
    if (!config) return
    if (config.lazy) {
      this.initLazyLoad()
    } else {
      this.initAdSlot()
    }
    // this.initAdSlot()
  },
  methods: {
    /** 懒加载 */
    initLazyLoad () {
      if (this.adMaster) return
      const observer = new InterObserver(this.$el, { rootMargin: '500px' })
      observer.bindObserver(() => {
        this.initAdSlot()
      })
    },
    async initAdSlot() {
      this.id = AdMaster.generateId()
      await this.$nextTick()
      let adConfig = AdMaster.getAdUnit(this.adUnitKey)
      /** sponsor 广告 */
      if (this.isSponsor && adConfig.sponsor) {
        adConfig = adConfig.sponsor
      }
      const adUnit = adConfig.adUnit
      const size = adConfig.size
      const passback = adConfig.passback
      this.adMaster = new AdMaster(this.id, adUnit, {
        size,
        hooks: {
          slotRenderEnded: (evt) => {
            /** passback */
            if (evt.isEmpty && passback) {
              this.adMaster.destroySlots()
              this.id = AdMaster.generateId()
              this.$nextTick(() => {
                this.adMaster = new AdMaster(this.id, passback.adUnit, {
                  size: passback.size,
                  hooks: {
                    slotRenderEnded: (evt) => {
                      this.isEmpty = evt.isEmpty
                      this.adMaster.setAdUnitKey(`${this.adUnitKey}-passback`)
                      console.log(`=====> passback ${this.isEmpty ? 'error' : 'success'}`)
                    }
                  }
                })
              })
            }
          }
        }
      })
      this.adMaster.setAdUnitKey(this.adUnitKey)
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
  &.is-empty, &.is-fit {
    background-color: transparent;
    .ad-slot-main {
      padding: 0;
    }
  }
}
</style>
