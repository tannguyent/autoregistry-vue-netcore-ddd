import { LoginModel } from "../../entity/account/index";
import { ModelValidationBuilderFactory } from "../../../plugin/validation/domain";

export class LoginModelValidationFactory extends ModelValidationBuilderFactory<LoginModel> {
    constructor() {
        super([
        ]);
    }
}
