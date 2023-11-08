
<template>
  <div
    :data-key="adUnitKey"
    :class="['ad-slot-wrap', { 'is-empty': isEmpty, 'is-fit': isFit || loading }]"
    :style="{ '--bg': loading ? 'transparent' : currentBg }">
    <div
      :class="['ad-slot-main']">
      <small class="ad-slot-title" v-if="adTitle && !isFit && !loading">{{ adTitle }}</small>
      <div :id="id"></div>
      <div :id="passbackId" v-if="passbackId"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { AdMaster } from '../ad-master/AdMaster'
import AdSlotBase from './ad-slot-base.vue'

export default {
  name: 'ad-slot',
  extends: AdSlotBase,
  props: {
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
     * 展示的样式
     */
    mode: {
      type: String,
      default: 'normal',
      validator: (mode) => ['fit', 'normal'].includes(mode)
    },
    /**
     * 预加载距离
     */
    rootMargin: {
      type: String,
      default: '500px'
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
    },
  },
  data () {
    return {
      isEmpty: false,
      passbackId: null,
      hidden: false,
      loading: true
    }
  },
  methods: {
    /**
     * 初始化函数, 继承于AdSlotBase的必要条件
     */
    async initAdSlot() {
      this.loading = true
      this.id = AdMaster.generateId()
      await this.$nextTick()
      let adConfig = AdMaster.getAdUnit(this.adUnitKey)
      if (!adConfig) return
      /** sponsor 广告 */
      if (this.isSponsor && adConfig.sponsor) {
        adConfig = adConfig.sponsor
      }
      const adUnit = adConfig.adUnit
      const size = adConfig.size
      const passback = adConfig.passback
      this.adMaster = new AdMaster(this.id, adUnit, {
        size,
        keyValue: this.currentKeyValue,
        disabled: adConfig.disabled,
        hooks: {
          slotRenderEnded: (evt) => {
            if (evt.isEmpty && !passback) {
              this.isEmpty = evt.isEmpty
            }
            /** passback */
            if (evt.isEmpty && passback) {
              // this.adMaster.destroySlots()
              this.passbackId = AdMaster.generateId()
              this.$nextTick(() => {
                this.adMaster = new AdMaster(this.passbackId, passback.adUnit, {
                  size: passback.size,
                  keyValue: this.currentKeyValue,
                  disabled: adConfig.disabled,
                  hooks: {
                    slotRenderEnded: (evt) => {
                      this.isEmpty = evt.isEmpty
                      this.adMaster.setAdUnitKey(`${this.adUnitKey}-passback`)
                      // console.log(`=====> passback ${this.isEmpty ? 'empty' : 'success'}`)
                      this.$emit("renderEnded", Object.assign({passback: true}, evt))
                      if (!evt.isEmpty) {
                        this.loading = false
                      }
                    }
                  }
                })
                this.adMaster.passback = true
              })
            }else{
              this.loading = false
              this.$emit("renderEnded", evt)
            }
          }
        }
      })
      this.adMaster.setAdUnitKey(this.adUnitKey)
    },
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
