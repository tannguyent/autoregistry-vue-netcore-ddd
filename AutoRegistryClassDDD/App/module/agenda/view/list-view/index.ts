import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import AgendaSidebarComponent from './side-bar'

@Component({
    template: require('./index.html'),
    components: {
        'side-bar-component': AgendaSidebarComponent
    }
})
export default class AgendaListViewComponent extends Vue {
}