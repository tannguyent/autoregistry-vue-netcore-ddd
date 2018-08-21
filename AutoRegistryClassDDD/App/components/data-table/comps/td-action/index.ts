import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({
    template: require('./index.html'),
    components: {
    },
})
export default class TdActionComponent extends Vue {

    @Prop()
    row: any

    @Prop()
    nested: any
}