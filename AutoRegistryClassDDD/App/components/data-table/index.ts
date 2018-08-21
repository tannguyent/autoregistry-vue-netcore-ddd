import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { IDataTableConfig, IDataTableSearchCondition, IDataTableSource } from './data-table.conf';
const namespace: string = 'datatable';

import TdActionComponent from "./comps/td-action"

@Component({
    template: require('./index.html'),
    components: {
        TdActionComponent
    },
})
export default class DataTableComponent extends Vue {
    @Prop({ required: true })
    config: IDataTableConfig

    @Prop({ required: false })
    search: IDataTableSearchCondition

    @Prop({ required: true })
    source: any[]

    get tableSource() {
        return {
            fixHeaderAndSetBodyMaxHeight: 200,
            tblStyle: 'table-layout: fixed', // must
            tblClass: 'table-bordered',
            columns: this.config.columns,
            data: this.source,
            total: 2, 
            query: {},
            HeaderSettings: false,
            Pagination: false,
            supportNested: true,
            supportBackup: true,
            selection: [],
        };
    }

    /**
     * VUE EVENT: CREATED
     * ADD VUEX STORE MODULE BY MANUAL
     * */
    created() {
    }

    /**
     * VUE EVENT: DETROY
     * unregister a module
     * */
    beforeDestroy() {
    }
}