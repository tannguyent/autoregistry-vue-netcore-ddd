import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { PropertyGeneralStoreModule } from './store/index';

const namespace: string = 'property-general';

@Component({
    template: require('./index.html'),
    components: {
    }
})
export default class PropertyEditGenaralComponent extends Vue {
    /**
    * VUE EVENT: CREATED
    * ADD VUEX STORE MODULE BY MANUAL
    * */
    created() {
        const store = this.$store;
        if (!(store && store.state && store.state[namespace])) {
            console.log(`registry module: ${namespace}`);
            this.$store.registerModule(namespace, PropertyGeneralStoreModule)
        } else {
            console.log(`reusing module: ${namespace}`);
        }
    }

    /**
     * VUE EVENT: DETROY
     * unregister a module
     * */
    beforeDestroy() {
        const store = this.$store;
        store.unregisterModule(namespace);
        console.log(`unregister module: ${namespace}`);
    }

}