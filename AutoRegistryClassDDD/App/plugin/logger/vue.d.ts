import ILogger from "./ILogger";

// put this in your source folder somewhere
// with a .d.ts extension the TS compiler will pick it up automatically
declare module 'vue/types/vue' {
    interface Vue {
        $logger: ILogger, 
    }
}