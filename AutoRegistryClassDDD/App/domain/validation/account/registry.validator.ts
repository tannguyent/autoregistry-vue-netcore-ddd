import { RegistryModel } from "../../entity/account/index";
import { ModelValidationBuilderFactory } from "../../../plugin/validation/domain";

export class RegistryModelValidationFactory extends ModelValidationBuilderFactory<RegistryModel> {
    constructor() {
        super([
        ]);
    }
}
