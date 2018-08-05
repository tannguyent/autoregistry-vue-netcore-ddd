import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class MixinComponent extends Vue {
    
    created() {
        console.log('MIXIN CREATED')
    }

   
    detroyed() {
        console.log('MIXIN DESTROYED')
    }

    $mixinFunction() {

    }
}