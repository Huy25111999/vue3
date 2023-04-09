<template lang="">
    <v-dialog persistent v-model="$props.show" class="modal-preview">
      <v-card>
        <v-card-title>
          <div class="header flex justify-between items-center">
            <div class="title">{{intl("preview_photo_preview")}}</div>
            <div class="close-btn cursor-pointer" @click="() => $props.onHide()">
              <font-awesome-icon icon="fa-solid fa-xmark" />
            </div>
          </div>
        </v-card-title>
  
        <v-card-text>
          <slot></slot>
        </v-card-text>
      </v-card>
    </v-dialog>
  </template>
  <script lang="ts">
  import { defineComponent } from "vue";
  import {useI18n} from "vue-i18n";
  
  export default defineComponent({
    name: "",
    components: {},
    props: ["show", "onHide"],
    setup(props, ctx) {
      const {t:intl} = useI18n({
        inheritLocale: true
      })
      return {intl};
    },
  });
  </script>
  <style lang="scss">
  .modal-preview {
    width: 60%;
    margin: 0 auto;
  
    .header {
      border-bottom: 1px solid #ebe3e3;
      padding: 13px 0;
    }
  }
  </style>
  