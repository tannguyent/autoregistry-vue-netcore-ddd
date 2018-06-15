import { IAuthorizationRequest, IAuthorizationSetting, IAuthorizationResponse } from "../../entity/index";

// this is base interface
export interface IAuthorizationRequestHandler {
    Authorizated(request: IAuthorizationRequest): IAuthorizationResponse;
}

// this is base class
export class BaseAuthorizationRequestHandler
    implements IAuthorizationRequestHandler {
    private setting: IAuthorizationSetting;
    constructor(setting: IAuthorizationSetting) {
        this.setting = setting;
    }

    Authorizated(Request: IAuthorizationRequest): IAuthorizationRequest {
        throw "not implemented in base";
    }
}

// this is default request handler to handle request authorization
export class DefaultAuthorizationRequestHandler
    extends BaseAuthorizationRequestHandler {
    constructor(setting: IAuthorizationSetting) {
        super(setting);
    }
}

// this is factory to can init request handle base on config
export class AuthorizationRequestHandlerFactory {
    getAuthorizationRequestHandler(config: IAuthorizationSetting): IAuthorizationRequestHandler {
        switch (config.AuthorizationMode) {
            default:
                return new DefaultAuthorizationRequestHandler(config);
        }
    }
}