
<template>
    <ion-label class="mb-4">{{ label }}</ion-label>
    <div class="w-full mt-3">
      <Field :name="name" :value="currentValue">
        <Datepicker
          class="custom-picker w-full"
          inputFormat="dd/MM/yyyy"
          :placeholder="placeholder"
          v-model="currentValue"
          :upperLimit="upperLimit"
          :lowerLimit="lowerLimit"
          @update:modelValue="updateValue"
          :class="`${errorMessage && meta.touched && ' mb-1 validate-error'} ${
            modelValue && 'has-value'
          }`"
        />
      </Field>
    </div>
  
    <p v-if="errorMessage && meta.touched" :class="'validate-message'">
      {{ errorMessage }}
    </p>
  </template>
  
  <script lang="ts">
  import { useField } from "vee-validate";
  import { computed, defineComponent, ref } from "vue";
  import { Field } from "vee-validate";
  import Datepicker from "vue3-datepicker";
  
  export default defineComponent({
    name: "InputDatePicker",
    components: { Field, Datepicker },
    props: {
      modelValue: {
        type: Date,
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
  
      upperLimit: {
        type: Date,
      },
  
      lowerLimit: {
        type: Date,
      },
    },
  
    setup(props, context) {
      const { errorMessage, meta } = useField(props.name);
  
      const updateValue = (newDate: any) => {
        context.emit("update:modelValue", newDate);
      };
  
      const currentValue = computed(() => props.modelValue);
  
      return { updateValue, errorMessage, meta, currentValue };
    },
  });
  </script>
  
  <style lang="scss">
  .custom-picker {
    background: #fff;
    padding: 12px 13px;
    border-radius: 10px;
    border: 1px solid #d9d8dd;
    outline: none;
    font-size: 15px;
  
    &:focus {
      outline: none;
      border-color: #0f38a9;
    }
  }
  .has-value {
    opacity: 1;
  }
  
  .validate-error {
    border: 1px solid red;
  }
  
  .validate-message {
    color: red;
  }
  </style>
  