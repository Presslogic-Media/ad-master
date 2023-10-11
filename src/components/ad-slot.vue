
<template>
  <div class="ad-slot-wrap">
    <div :id="id"></div>
  </div>
</template>

<script lang="ts">
import { AdMaster } from '../ad-master/AdMaster'

export default {
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
      const adMaster = new AdMaster(this.id, 'biu-test-ad-unit-1')
      console.log(111, adMaster)
    }
  }
}
</script>
