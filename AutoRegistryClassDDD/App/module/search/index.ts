import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Observable } from "rxjs";
const namespace: string = "searchResult";

//// NOTE: some time we do not need store something into the vuex
//// JUST: ONE WAY TO BIND
@Component({
    template: require("./index.html"),
    components: {}
})
export default class SearchResultModuleComponent extends Vue {
    //#region Prop
    @Prop()
    query: string
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
    created() { }

    /**
     * VUE EVENT: DETROY
     * unregister a module
     * */
    beforeDestroy() { }

    // subscription by Rxjs
    subscriptions() {
        const $q = this.$watchAsObservable("q", { immediate: true })
            .pluck("newValue")
            .do(() => {
                this.typing = true;
            })
            .debounceTime(1500)
            .do(() => {
                this.typing = false;
            })
            .filter(q => !!q);
        const $page = this.$watchAsObservable("page", { immediate: true }).pluck(
            "newValue"
        );
        return {
            data: Observable.combineLatest($q, $page, (q, page) => ({ q, page }))
                .debounceTime(50) // prevent double request when query and page change at same time
                .do(() => {
                    // reset error and show loading
                    this.err = "";
                    this.loading = true;
                })
                .do(({ q }) => {
                    this.title = q;
                })
                .flatMap(({ q, page }) =>
                    API.search(q, page).catch(err => {
                        this.error = err.message || "something went wrong :P";
                        return Observable.of(null);
                    })
                )
                .do(() => {
                    this.loading = false;
                })
        };
    }
}
