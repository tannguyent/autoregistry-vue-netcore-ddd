import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { PropertyStoreModule } from './store';

const namespace: string = 'property';

@Component({
    template: require('./index.html'),
    components: {
    }
})
export default class PropertyModuleComponent extends Vue {
    /**
     * VUE EVENT: CREATED
     * ADD VUEX STORE MODULE BY MANUAL
     * */
    created() {
        const store = this.$store;
        if (!(store && store.state && store.state[name])) {
            console.log(`registry module: ${name}`);
            this.$store.registerModule(namespace, PropertyStoreModule)
        } else {
            console.log(`reusing module: ${name}`);
        }
    }

    /**
     * VUE EVENT: DETROY
     * unregister a module
     * */
    detroyed() {
        const store = this.$store;
        store.unregisterModule(namespace); 
    }
}