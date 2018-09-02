import Vue from "vue";
import { Component } from "vue-property-decorator";
import { pluck, debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
	template: require("./index.html"),
	components: {}
})
export default class SearchbarComponent extends Vue {
	//#region data
	keySearch: string = "";
	//#endregion

	created() {
		this.$watchAsObservable('keySearch')
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
					this.$logger.debug('search value', value)
					this.$router.push({ path: `/admin/search-result/${value}` });
				},
				err => this.$logger.error(err),
				() => {
					this.$logger.debug('complete')
				}
			)
	}
}
