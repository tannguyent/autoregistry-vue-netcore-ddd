import { Component, Inject, Provide } from "vue-property-decorator";
import Vue from "vue";
import { IModelValidation, IFieldlValidation } from "../domain/validation/index";

@Component
export class ValidationMixin extends Vue {
    beforeCreate() {
        if (this.$options.parent) this.$validator = this.$options.parent.$validator;
        this.$validator.reset();
    }

    $addValidation<TModel>(modelValidation: IModelValidation<TModel>) {
        const self = this as any;
        modelValidation.Fields.forEach(validation => {
            if (self[validation.BindingField] !== undefined) {
                self.$validator.attach({
                    name: validation.Name || validation.BindingField,
                    alias: validation.DisplayField,
                    rules: validation.Rules,
                    scope: modelValidation.Scope,
                    model: { expression: validation.BindingField, lazy: false },
                    initial: validation.Initial || false,
                    events: "input|blur",
                    vm: {
                        $validator: self.$validator,
                        $watch: self.$watch.bind(self)
                    },
                    getter: () => {
                        return self[validation.BindingField];
                    },
                    flags: {
                        valid: true,
                        invalid: false,
                        validated: false
                    },
                    classes: true,
                    classNames: {
                        valid: "success",
                        invalid: "danger"
                    }
                });
            }
        });
    }

    $removeValidation<TModel>(modelValidation: IModelValidation<TModel>) {
        const self = this;
        modelValidation.Fields.forEach(validation => {
            self.$validator.detach(validation.BindingField, validation.Scope);
        });
    }

    $removeScopeValidations(scope: string) {
        const self = this;
        if (scope != null) scope = scope.toLowerCase();
        const fields = self.$validator.fields.items.filter(
            c => c.scope != null && c.scope.toLowerCase().indexOf(scope) >= 0
        );
        fields.forEach(validation => {
            self.$validator.detach(validation.name, validation.scope);
        });
    }

    $validationAll(): Promise<any> {
        const self = this as any;
        return self.$validator
            .validateScopes()
            .then(result => {
                if (result) return Promise.resolve(result);
                return Promise.reject(result);
            })
            .catch(result => {
                return Promise.reject(result);
            });
    }

    $addValidationFromServer<TModel>(
        validationFields: IFieldlValidation[],
        modelBuilderFactory: ModelValidationBuilderFactory<TModel>
    ) {
        if (validationFields == null || validationFields.length == 0) return;
        const self = this as any;
        validationFields.forEach(item => {
            let field = modelBuilderFactory.Build(item);
            if (field != null) {
                self.$validator.errors.items.push({
                    field: field.BindingField,
                    msg: field.Message,
                    scope: field.Scope,
                    rule: field.Rules
                });
            }
        });
    }

    async $clearValidations<TModel>() {
        await this.$validator.reset();
        await this.$validator.errors.clear();
        await this.$validator.resume();
    }

    $invalidErrors<TModel>(scope: string) {
        if (scope == null)
            return this.$root.$validator.errors.items.filter(c => c.scope == null);
        scope = scope.replace(/\[[^\][]*\]$/, "");
        return this.$root.$validator.errors.items.filter(
            c => c.scope.replace(/\[[^\][]*\]$/, "") == scope
        );
    }

    $hasScopeInValid<TModel>(scope: string) {
        if (scope == null)
            return this.$root.$validator.errors.items.some(c => c.scope == null);
        scope = scope.replace(/\[[^\][]*\]$/, "");
        return this.$root.$validator.errors.items.some(
            c => c.scope.replace(/\[[^\][]*\]$/, "") == scope
        );
    }
}
