import { IAuthorizationResponse, IAuthorizationSetting } from "../../entity/index";


export interface IAuthorizationResponseHandler {
    Handle(response: IAuthorizationResponse): IAuthorizationResponse;
}

export class BaseAuthorizationResponseHandler
    implements IAuthorizationResponseHandler {
    private setting: IAuthorizationSetting;
    constructor(setting: IAuthorizationSetting) {
        this.setting = setting;
    }

    Handle(response: IAuthorizationResponse): IAuthorizationResponse {
        throw "not implemented in base";
    }
}

export class DefaultAuthorizationResponseHandler
    extends BaseAuthorizationResponseHandler {
    constructor(setting: IAuthorizationSetting) {
        super(setting);
    }
}

export class AuthorizationSuccessResponseHandler
    extends BaseAuthorizationResponseHandler {
    constructor(setting: IAuthorizationSetting) {
        super(setting);
    }
}

export class AuthorizationFailureResponseHandler
    extends BaseAuthorizationResponseHandler {
    constructor(setting: IAuthorizationSetting) {
        super(setting);
    }
}