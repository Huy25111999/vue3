<template>
    <label>{{ label }}</label>
    <div class="w-full mt-3" as="textarea">
      <Field
        as="textarea"
        :type="type"
        :name="name"
        :value="modelValue"
        @input="$emit('input', $event)"
        :placeholder="placeholder"
        :class="`w-full ${errorMessage && meta.touched && 'mb-1 validate-error'} `"
      >
      </Field>
      <p v-if="errorMessage && meta.touched" :class="'validate-message'">{{ errorMessage }}</p>
    </div>
  </template>
  <script lang="ts">
  import { defineComponent, ref } from "vue";
  import { Field, useField } from "vee-validate";
  
  export default defineComponent({
    name: "TextareaField",
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
    },
    setup(props, ctx) {
      const { errorMessage, meta } = useField(props.name);
  
      const innerValue = ref("");
  
      const handleChange = (event: any) => {
        ctx.emit("update:modelValue", event.target.value);
      };
  
      return {
        errorMessage,
        meta,
        innerValue,
        handleChange,
      };
    },
  });
  </script>
  <style lang="scss" scoped>
  textarea {
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
  
  .validate-error {
    border: 1px solid red;
  }
  
  .validate-message {
    color: red;
  }
  </style>
  