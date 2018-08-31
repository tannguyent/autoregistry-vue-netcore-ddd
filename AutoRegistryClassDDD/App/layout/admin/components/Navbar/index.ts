import Vue from "vue";
import { Component } from "vue-property-decorator";
import Searchbar from './Searchbar'

@Component({
  template: require("./index.html"),
  components: {
    Searchbar
  }
})
export default class NavigationbarComponent extends Vue {}
