import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Navbar, Sidebar, TagsView } from "./components";

@Component({
  template: require("./index.html"),
  components: {
    Navbar,
    Sidebar,
    TagsView
  }
})
export default class AdminLayoutComponent extends Vue {}
