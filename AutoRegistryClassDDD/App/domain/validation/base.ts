import { IFieldlValidation } from "./base";
import { BaseModel } from "../entity/index";

export interface IFieldlValidation {
    BindingField?: string;
    ModelField?: string;
    DisplayField?: string;
    Name?: string;
    Rules?: any;
    Scope?: string;
    Message?: string;
    Initial?: boolean;
}

export class FieldlValidation extends BaseModel<IFieldlValidation>
    implements IFieldlValidation {
    BindingField?: string;
    ModelField?: string;
    DisplayField?: string;
    Rules?: any;
    Scope?: string;
    Message?: string;
    Initial?: boolean;
    Name?: string;
    constructor(option?: IFieldlValidation) {
        super(option);
    }
}

export interface IModelValidation<TModel> {
    Fields?: IFieldlValidation[];
    Name?: string;
    Index?: number;
    Scope?: string;
}

export class ModelValidation<TModel> extends BaseModel<IModelValidation<TModel>>
    implements IModelValidation<TModel> {
    Fields?: IFieldlValidation[];
    Name?: string;
    Index?: number;
    Scope?: string;

    constructor(
        option?: IModelValidation<TModel>,
        name?: string,
        index?: number
    ) {
        super(option);
        this.Name = name;
        this.Index = index;
        if (this.Index == null) this.Scope = this.Name;
        else this.Scope = this.Name + "[" + this.Index + "]";
    }
}

export class ModelValidationBuilderFactory<TModel> {
    protected validationRules: IModelValidation<TModel>[];
    constructor(validationRules: IModelValidation<TModel>[]) {
        this.validationRules = validationRules;
    }

    Build(field: IFieldlValidation): IFieldlValidation {
        if (field == null) return null;

        // get scope
        let scope = field.Scope;
        if (scope != null) scope = scope.replace(/\[[^\][]*\]$/, '');
        let configScopeValidationFields = this.validationRules.find(
            c => c.Name == scope
        );
        if (configScopeValidationFields == null) return null;

        // get field
        let configValidationField = configScopeValidationFields.Fields.find(
            c => (c.ModelField || c.BindingField) == field.ModelField
        );
        if (configValidationField == null) return null;

        field.BindingField = configValidationField.BindingField;
        field.DisplayField = configValidationField.DisplayField;
        field.Message = field.Message.replace(
            "'[DisplayField]'",
            configValidationField.DisplayField
        );
        return field;
    }
}
