
<template>
  <div class="ad-slot-wrap">
    <div :id="id"></div>
  </div>
</template>

<script lang="ts">
import { AdMaster } from '../ad-master/AdMaster'

export default {
  props: {
    adUnitKey: {
      type: String,
      default: 'M1'
    }
  },
  data () {
    return {
      id: ''
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initAdSlot()
    })
  },
  methods: {
    initAdSlot() {
      this.id = AdMaster.generateId()
      const adConfig = AdMaster.getAdUnit(this.adUnitKey)
      console.log('adConfig: ', adConfig)
      const adMaster = new AdMaster(this.id, 'biu-test-ad-unit-1')
      console.log('adSlot adMaster: ', adMaster)
    }
  }
}
</script>
