import _Vue from "vue";
import { LoggerPluginOptions } from './plugin.conf';
import Logger from "js-logger"
const LggerPlugin = {
    install(Vue: typeof _Vue, options?: LoggerPluginOptions) {


        /** Logger */
        Logger.useDefaults();

        // only log error
        // Logger.setLevel(Logger.ERROR);

        // Log Handler Functions
        // Send messages to a custom logging endpoint for analysis.
        // TODO: 
        // 	Add some security? (nah, you worry too much! :P)
        // 	You can applied reactive to throttle send message to server
        var consoleHandler = Logger.createDefaultHandler();
        var sendToServerHandler = function (messages, context) {
            // jQuery.post('/logs', { message: messages[0], level: context.level });
            console.log('error message is sending to server ....')
        };

        // YOU CAN ALSO STORED ERROR TO VUEX
        var storeErrorMessageHandler = function (messages, context) {
        };

        // ATTACHE HANDLER
        Logger.setHandler(function (messages, context) {
            switch (context.level) {
                case Logger.DEBUG || Logger.WARN: {
                    consoleHandler(messages, context);
                    break;
                }
                case Logger.ERROR: {
                    consoleHandler(messages, context);
                    sendToServerHandler(messages, context);
                    break;
                }
                default: {
                    consoleHandler(messages, context);
                }
            }
        });

        // you can set only in production env show the error-log
        //if (process.env.NODE_ENV === "production") {
        Vue.config.errorHandler = function (err, vm, trace) {
            Logger.error('Vue error: ', err);
        };

        Vue.config.warnHandler = function (msg, vm, trace) {
            Logger.warn('Vue warning: ', msg);
        }
        // }

        Vue.prototype.$logger = Logger
    }
}

export default LggerPlugin;

