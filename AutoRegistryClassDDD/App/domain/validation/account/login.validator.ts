import { ModelValidationBuilderFactory } from "../index";
import { LoginModel } from "../../entity/account/index";

export class LoginModelValidationFactory extends ModelValidationBuilderFactory<LoginModel> {
    constructor() {
        super([
        ]);
    }
}
