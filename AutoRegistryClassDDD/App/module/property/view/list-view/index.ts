import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import PropertySidebarComponent from './side-bar'

const DataTableComponent = resolve => require(['../../../../components/data-table'], resolve);

@Component({
    template: require('./index.html'),
    components: {
        'side-bar-component': PropertySidebarComponent,
        'data-table': DataTableComponent
    }
})
export default class PropertyListViewComponent extends Vue {

    get tableConfig(): any {
        return {
            columns: [
                {
                    title: "ID",
                    field: 'Id',
                    sortable: true,
                    colStyle: { width: '200px' }
                },
                {
                    title: "Reference",
                    field: 'Reference',
                    sortable: true,
                },
                {
                    title: 'Operation',
                    tdComp: 'TdActionComponent',
                    colStyle: { width: '300px' },
                    fixed: 'right',
                }
            ],
            hasPagination: true
        }
    }

    get tableSource(): any {
        return [
            {
                Id: "1",
                Reference: 'Reference',
            },
            {
                Id: "2",
                Reference: 'Reference',
            },
            {
                Id: "3",
                Reference: 'Reference',
            },
            {
                Id: "4",
                Reference: 'Reference',
            }
        ]
    }
}