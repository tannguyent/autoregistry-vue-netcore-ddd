// put this in your source folder somewhere
// with a .d.ts extension the TS compiler will pick it up automatically
import { AxiosStatic } from "axios";

declare module 'vue/types/vue' {
    interface Vue {
        $http: AxiosStatic;
    }
}