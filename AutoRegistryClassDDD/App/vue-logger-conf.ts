import Vue from "vue";
import * as Logger from 'js-logger';

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
	consoleHandler(messages, context);
	sendToServerHandler(messages, context);
	storeErrorMessageHandler(messages, context);
});




// you can set only in production env show the error-log
//if (process.env.NODE_ENV === "production") {
    Vue.config.errorHandler = function (err, vm, info) {
        Logger.error('Vue error: ', err);
    };
// }
