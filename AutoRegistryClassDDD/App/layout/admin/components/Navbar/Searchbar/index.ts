import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
	template: require("./index.html"),
	components: {}
})
export default class SearchbarComponent extends Vue {
	//#region data
	searchValue: string = "";
	//#endregion

	created() {
		this.$watchAsObservable('searchValue')
			.pluck('newValue')
			.subscribe(
				(q) => {
					this.$router.replace({ name: 'SearchResult', query: { q } })
				}
			)
	}
}
