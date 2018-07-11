import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import HeaderComponent from "../frontview/header/HeaderComponent.vue"
import FooterComponent from "../frontview/footer/FooterComponent.vue"

@Component({
    template: require('./index.html'),
    components: {
        'header-component': HeaderComponent,
        'footer-component': FooterComponent,
    }
})
export default class HomeComponent extends Vue {
}