<template>
    <label>{{ label }}</label>
    <div class="w-full mt-3">
      <Field
        :name="name"
        :value="modelValue"
        as="select"
        @input="$emit('input', $event)"
        :placeholder="placeholder"
      >
        <option v-for="(optionItem, index) in items" :key="index" :value="optionItem?.value" >
          {{ optionItem?.label }}
        </option>
      </Field>
      <p v-if="errorMessage && meta.touched" :class="'validate-message'">{{ errorMessage }}</p>
    </div>
  </template>
  <script lang="ts">
  import { ErrorMessage, Field, useField } from "vee-validate";
  import { computed, defineComponent } from "vue";
  
  export default defineComponent({
    name: "InputField",
    components: { Field, ErrorMessage },
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
      items: {
        type: Array<any>,
      },
    },
    setup(props, ctx) {
      const { errorMessage, meta } = useField(props.name);
  
      const currentValue = computed(() => props.modelValue);
      const handleChange = (value: any) => {
        ctx.emit("update:modelValue", value);
      };
  
      return {
        errorMessage,
        meta,
        currentValue,
        handleChange,
      };
    },
  });
  </script>
  <style lang="scss" scoped>
  select {
    width: 100%;
    background: #fff;
    padding: 12px 13px;
    border-radius: 10px;
    border: 1px solid #d9d8dd;
    outline: none;
    font-size: 15px;
  
    option {
    }
    &:focus {
      border-color: #4b35f2;
    }
  }
  .has-value {
    opacity: 1;
    font-weight: 600;
  }
  
  .validate-error {
    border: 1px solid red;
  }
  
  .validate-message {
    color: red;
  }
  </style>
  