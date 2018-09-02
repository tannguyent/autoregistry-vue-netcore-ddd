﻿import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Observable } from "rxjs";
const namespace: string = "searchResult";
import * as API from './services/api'
import { debounceTime, pluck, distinctUntilChanged } from 'rxjs/operators';

//// NOTE: some time we do not need store something into the vuex
//// JUST: ONE WAY TO BIND
@Component({
    template: require("./index.html"),
    components: {}
})
export default class SearchResultModuleComponent extends Vue {
    //#region Prop
    @Prop()
    query: string;
    //#endregion

    //#region data
    title: string = "";
    typing: boolean = false;
    loading: boolean = false;
    error: string = "";
    //#endregion

    /**
     * VUE EVENT: CREATED
     * ADD VUEX STORE MODULE BY MANUAL
     * */
    created() {
        this.$watchAsObservable('query')
            .pipe(
                // DELAY 
                debounceTime(1500),
                // map resource
                pluck('newValue'),
                // IGNORE SUBSCRIBE IF SAME VALUE
                distinctUntilChanged()
            )
            .subscribe(
                (value: string) => {
                    API.search(this.$httpManager.createRequest(), value, 1)
                },
                err => { },
                () => {
                    { }
                }
            )

    }

    /**
     * VUE EVENT: DETROY
     * unregister a module
     * */
    beforeDestroy() { 
        this.$httpManager.cancelAllRequest();
    }



}