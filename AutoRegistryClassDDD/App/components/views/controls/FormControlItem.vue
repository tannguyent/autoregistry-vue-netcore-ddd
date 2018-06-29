<template >

  <div class="form__input" :class="{ '': true, 'form__error': !!error, 'form__validated': state.validated  }">
    <label v-if="label" class="form__label">{{ label }}</label>
    <div :class="{ 'form__valid': state.valid, 'form__invalid': state.invalid}"> 
      <slot name="content" :label="label" :error="error"/>
    </div> 
    <transition name="slide">
      <p v-show="error" class="form__error">{{ error }}</p>
    </transition> 

  </div> 
</template>

<script>
import { mapFields } from "vee-validate";
export default {
  props: {
    label: {
      type: String,
      required: false
    },
    name: {
      type: String,
      required: false
    },
    scope: {
      type: String,
      required: false
    },
    error: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      fieldValidate: {}
    };
  },
  computed: {
    state: function() {
      return this.fieldValidate;
    }
  },
  mounted: function() {
    if (this.name != null)
      var field = this.$validator.fields.items.find(
        c => c.name == this.name && c.scope == this.scope
      );
    if (field != null) this.fieldValidate = field.flags;
  }
};
</script>
