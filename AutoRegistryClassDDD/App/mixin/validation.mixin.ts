import { Component } from "vue-property-decorator";
import Vue from "vue";
import { IModelValidation } from "../domain/validation/index";

@Component
export class ValidationMixin extends Vue {
    /**
     * add validation to context
     * @param modelValidation
     */
    $addValidation<TModel>(modelValidation: IModelValidation<TModel>) {
        const self = this as any;
        modelValidation.Fields.forEach(validation => {
            self.$validator.attach({
                name: validation.BindingField,
                alias: validation.DisplayField,
                rules: validation.Rules,
                scope: validation.Scope,
                model: { expression: validation.BindingField, lazy: false },
                initial: true,
                events: 'input',
                vm: {
                    $validator: self.$validator,
                    $watch: self.$watch.bind(self)
                },
                getter: () => {
                    return this[validation.BindingField];
                }
            });
        });
    }

    /**
     * remove validation
     * @param modelValidation
     */
    $removeValidation<TModel>(modelValidation: IModelValidation<TModel>) {
        const self = this as any;
        modelValidation.Fields.forEach(validation => {
            self.$validator.detach(validation.BindingField, validation.Scope);
        });
    }

    /**
     * remove validation by scope
     * @param scope
     */
    $removeScopeValidations(scope: string) {
        const self = this as any;
        const fields = self.$validator.fields.items.filter(
            c => c.scope != null && c.scope.indexOf(scope) >= 0
        );
        fields.forEach(validation => {
            self.$validator.detach(validation.name, validation.scope);
        });
    }

    /**
     * validate all validation 
     */
    $validationAll(): boolean {
        const self = this as any;
        Promise.all([self.$validator.validateScopes()]);
        debugger;
        return self.errors.items.length == 0;
    }
}
