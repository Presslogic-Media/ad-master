<!-- 业务基础组件, 其他组件通过继承此组件来扩展特殊业务的广告组件 -->
<script>
import { AdMaster, InterObserver } from '../ad-master/AdMaster'

export default {
    props: {
        /** 广告的别名key */
        adUnitKey: {
            type: String,
            default: 'M1'
        },
        /**
         * 是否为sponor广告
         */
        isSponsor: {
            type: Boolean,
            default: false
        },
        /**
         * 广告位级别的key-value
         */
        keyValue: {
            type: Object,
            default: () => ({})
        },
        /**
         * 预加载距离
         */
        rootMargin: {
            type: String,
            default: '0px'
        }
    },
    data() {
        return {
            id: AdMaster.generateId(),
            adMaster: null,
            lazyObserver: null
        }
    },
    computed: {
        /** 当前广告位的配置 */
        adUnitConfig() {
            return AdMaster.getAdUnit(this.adUnitKey)
        },
        /** 当前广告位的key-value */
        currentKeyValue() {
            return Object.assign({}, this.adUnitConfig.keyValue || {}, this.keyValue)
        }
    },
    mounted() {
        const config = this.adUnitConfig
        if (!config || ['ad-slot-script'].includes(this.$options.name)) return
        if (config.lazy) {
            this.initLazyLoad()
        } else {
            this.initAdSlot()
        }
    },
    beforeDestroy() {
        this.lazyObserver.destory()
        this.adMaster?.destroySlots()
    },
    methods: {
        /** 懒加载 */
        initLazyLoad () {
            if (this.adMaster) return
            this.lazyObserver = new InterObserver(this.$el, { rootMargin: this.rootMargin })
            this.lazyObserver.bindObserver(() => {
                this.initAdSlot()
            })
        },
    }
}
</script>