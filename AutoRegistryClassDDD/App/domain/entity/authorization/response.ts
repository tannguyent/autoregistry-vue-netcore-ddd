import { BaseModel } from "../index";

// base interface
export interface IAuthorizationResponse { }

// default model interface
export interface IDefaultAuthorizationResponse extends IAuthorizationResponse { }

// default model
export class DefaultAuthorizationResponse extends BaseModel<IDefaultAuthorizationResponse>
    implements IDefaultAuthorizationResponse {

    constructor(option: IDefaultAuthorizationResponse) {
        super(option);
    }
}