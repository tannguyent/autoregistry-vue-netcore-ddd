import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import MenuComponent from './menu/MenuComponent.vue';

@Component({
    template: require('./index.html'),
    components: {
        'menu-items': MenuComponent
    }
})
export default class SidebarComponent extends Vue {
}