// put this in your source folder somewhere
// with a .d.ts extension the TS compiler will pick it up automatically
import AxiosManager from "./axios-conf";

declare module 'vue/types/vue' {
    interface Vue {
        $httpManager: AxiosManager;
    }
}