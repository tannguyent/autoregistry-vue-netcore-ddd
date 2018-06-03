import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import SidebarComponent from '../admin/sidebar/SidebarComponent.vue';
import HeaderComponent from "../admin/header/HeaderComponent.vue";
import FooterComponent from "../admin/footer/FooterComponent.vue";

@Component({
    template: require('./index.html'),
    components: {
        'sidebar-component': SidebarComponent,
        'header-component': HeaderComponent,
        'footer-component': FooterComponent
    }
})
export default class AdminHomeComponent extends Vue {
}