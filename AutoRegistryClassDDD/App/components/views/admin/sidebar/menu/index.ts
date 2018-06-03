import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { MenuItem } from '../../../../../models/menu'
@Component({
    template: require('./index.html'),
    components: {
    }
})
export default class MenuComponent extends Vue {
    menuItems: MenuItem[] = [
        new MenuItem({ Name: "Dashboard", Icon: "dashboard", Link: "/dashboard" }),
        new MenuItem({ Name: "Setting", Icon: "widgets", Link: "/setting" })];
}