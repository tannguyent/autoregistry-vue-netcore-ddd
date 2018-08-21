import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { PropertyDocumentStoreModule } from './store';

const namespace: string = 'property-document';

@Component({
    template: require('./index.html'),
    components: {
    }
})
export default class PropertyEditlDocumentComponent extends Vue {
    /**
    * VUE EVENT: CREATED
    * ADD VUEX STORE MODULE BY MANUAL
    * */
    created() {
        const store = this.$store;
        if (!(store && store.state && store.state[namespace])) {
            console.log(`registry module: ${namespace}`);
            this.$store.registerModule(namespace, PropertyDocumentStoreModule)
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