import Vue from 'vue'
import App from './app.vue'
import { AdMasterGlobal } from '../ad-master/AdMaster'

Vue.config.productionTip = false


/**
 * 初始化全局配置
 */
const globalConfig = {
  networkCode: 123517519,
  pageUrl: 'https://pretty.presslogic.com',
  keyValue: {
    env: 'uat',
    subdomain: 'girls',
  },
}

/** 配置全局属性 */
const adMasterGlobal = AdMasterGlobal.getInstance(globalConfig)

/** 配置ad unit映射表 */
console.log(123, adMasterGlobal)

AdMasterGlobal.loadGpt().then(() => {
  /** 开启全局的 hooks */
  AdMasterGlobal.enabledSlotRenderEnded()
  AdMasterGlobal.enabledImpressionViewable()
})

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})