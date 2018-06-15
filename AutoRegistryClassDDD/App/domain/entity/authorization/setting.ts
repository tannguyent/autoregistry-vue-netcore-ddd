import { BaseModel } from "../index";

// base interface
export interface IAuthorizationSetting {
    AuthorizationMode?: string; 
}

// default model interface
export interface IDefaultAuthorizationSetting extends IAuthorizationSetting {
    AuthorizationMode?: string;
}

// default model
export class DefaultAuthorizationSetting extends BaseModel<IDefaultAuthorizationSetting>
    implements IDefaultAuthorizationSetting {
    AuthorizationMode?: string;
    constructor(option: IDefaultAuthorizationSetting) {
        super(option);
    }
}