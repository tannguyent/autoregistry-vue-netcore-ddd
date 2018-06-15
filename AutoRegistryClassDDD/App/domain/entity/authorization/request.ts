import { BaseModel } from "../index";

// base interface
export interface IAuthorizationRequest { }

// default model interface
export interface IDefaultAuthorizationRequest extends IAuthorizationRequest {}

// default model
export class DefaultAuthorizationRequest extends BaseModel<IDefaultAuthorizationRequest>
    implements IDefaultAuthorizationRequest {

    constructor(option: IDefaultAuthorizationRequest) {
        super(option);
    }
}