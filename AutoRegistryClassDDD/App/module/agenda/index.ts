import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { AgendaStoreModule } from './store';

const namespace: string = 'agenda';

@Component({
    template: require('./index.html'),
    components: {
    }
})
export default class AgendaModuleComponent extends Vue {
    /**
     * VUE EVENT: CREATED
     * ADD VUEX STORE MODULE BY MANUAL
     * */
    created() {
        const store = this.$store;
        if (!(store && store.state && store.state[namespace])) {
            console.log(`registry module: ${namespace}`);
            this.$store.registerModule(namespace, AgendaStoreModule)
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