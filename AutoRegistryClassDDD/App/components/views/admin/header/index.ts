import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import NavigationBarComponent from '../header/navbar/NavigationBarComponent.vue'

@Component({
    template: require('./index.html'),
    components: {
        'nav-bar': NavigationBarComponent
    }
})
export default class HeaderComponent extends Vue {
}