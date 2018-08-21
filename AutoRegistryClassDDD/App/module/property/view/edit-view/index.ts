import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { PropertyEditStoreModule } from './store/index';

const namespace: string = 'property-edit';

@Component({
    template: require('./index.html'),
    components: {
    }
})
export default class PropertyEditViewComponent extends Vue {
    get id() {return this.$route.params.id;}
    /**
    * VUE EVENT: CREATED
    * ADD VUEX STORE MODULE BY MANUAL
    * */
    created() {
        const store = this.$store;
        if (!(store && store.state && store.state[namespace])) {
            console.log(`registry module: ${namespace}`);
            this.$store.registerModule(namespace, PropertyEditStoreModule)
        } else {
            console.log(`reusing module: ${namespace}`);
        }
    }

    /**
     * VUE EVENT: beforeDestroy
     * unregister a module
     * */
    beforeDestroy() {
        const store = this.$store;
        store.unregisterModule(namespace);
        console.log(`unregister module: ${namespace}`);
    }
}