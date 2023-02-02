<template>
    <label>{{ label }} <span v-if="required" style="color: red">*</span></label>
    <div class="w-full mt-3">
      <Field
        :type="type"
        :name="name"
        :value="modelValue"
        :placeholder="placeholder"
        :class="`w-full ${
          errorMessage && meta.touched && 'mb-1 validate-error'
        } `"
      >
      </Field>
      <p v-if="errorMessage && meta.touched" :class="'validate-message'">
        <!-- {{ intl(errorMessage) }} -->
        {{ errorMessage}}
      </p>
    </div>
  </template>
  <script lang="ts">
  import { defineComponent, ref } from "vue";
  import { Field, useField } from "vee-validate";
//   import { useI18n } from "vue-i18n";
  
  export default defineComponent({
    name: "InputField",
    components: { Field },
    props: {
      modelValue: {
        type: String,
        required: true,
      },
      label: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      placeholder: {
        type: String,
      },
      type: {
        type: String,
        default: "text",
      },
      required: {
        type: Boolean,
      },
    },
    setup(props, ctx) {
      const { errorMessage, meta } = useField(props.name);
  
      const innerValue = ref("");
  
    //   const { t: intl, locale } = useI18n({
    //     inheritLocale: true,
    //   });
  
      return {
        errorMessage,
        meta,
        innerValue,
     //   intl,
      };
    },
  });
  </script>
  <style lang="scss" scoped>
  input {
    background: #fff;
    padding: 12px 13px;
    border-radius: 10px;
    border: 1px solid #d9d8dd;
    outline: none;
    font-size: 15px;
  
    &:focus {
      border-color: #4b35f2;
    }
  }
  
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
  
  .validate-error {
    border: 1px solid red;
  }
  
  .validate-message {
    color: red;
  }
  </style>
  