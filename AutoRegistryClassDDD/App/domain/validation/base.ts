import { BaseModel } from "../entity/index";

export interface IFieldlValidation {
    BindingField?: string;
    DisplayField?: string;
    Rules?: string;
    Scope?: string;
    Message?: string;
}

export class FieldlValidation extends BaseModel<IFieldlValidation>
    implements IFieldlValidation {
    constructor(option?: IFieldlValidation) {
        super(option);
    }
}

export interface IModelValidation<TModel> {
    Fields?: IFieldlValidation[];
}

export class ModelValidation<TModel> extends BaseModel<IModelValidation<TModel>>
    implements IModelValidation<TModel> {
    Fields?: IFieldlValidation[];
    constructor(option?: IModelValidation<TModel>) {
        super(option);
    }
}
