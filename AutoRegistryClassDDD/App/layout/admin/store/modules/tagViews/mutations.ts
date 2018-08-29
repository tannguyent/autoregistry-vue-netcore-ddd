import { MutationTree } from "vuex";
import { ITagsViewState } from "./state";
import { ITagViewModel } from "../../../models/tag-view-model";
/**
 * VUEX: MUTATION
 * */
export const mutations: MutationTree<ITagsViewState> = {
	/**
	 *
	 */
	ADD_VISITED_VIEWS: (state, view: ITagViewModel) => {
		if (state.visitedViews.some(v => v.Path === view.Path)) return;
		state.visitedViews.push(
			Object.assign({}, view, {
				title: view.Meta.Title || "no-name"
			})
		);
		if (!view.Meta.Nocache && view.Name) {
			state.cachedViews.push(view.Name);
		}
	},
	/**
	 *
	 */
	DEL_VISITED_VIEWS: (state, view: ITagViewModel) => {
		for (const [i, v] of state.visitedViews.entries()) {
			if (v.Path === view.Path) {
				state.visitedViews.splice(i, 1);
				break;
			}
		}
		for (const i of state.cachedViews) {
			if (i === view.Name) {
				const index = state.cachedViews.indexOf(i);
				state.cachedViews.splice(index, 1);
				break;
			}
		}
	},
	/**
	 *
	 */
	DEL_OTHERS_VIEWS: (state, view: ITagViewModel) => {
		for (const [i, v] of state.visitedViews.entries()) {
			if (v.Path === view.Path) {
				state.visitedViews = state.visitedViews.slice(i, i + 1);
				break;
			}
		}
		for (const i of state.cachedViews) {
			if (i === view.Name) {
				const index = state.cachedViews.indexOf(i);
				state.cachedViews = state.cachedViews.slice(index, index + 1);
				break;
			}
		}
	},
	/**
	 *
	 */
	DEL_ALL_VIEWS: state => {
		state.visitedViews = [];
		state.cachedViews = [];
	}
};
