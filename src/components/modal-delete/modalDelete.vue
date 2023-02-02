<template>
    <v-dialog class="modal-delete" v-model="$props.show" persistent>
      <v-card>
        <v-card-title>
          {{ $props.title }}
        </v-card-title>
        <v-card-text>
          <h3>{{ content }}</h3>
        </v-card-text>
        <v-card-actions class="px-5">
          <div class="w-full actions flex items-center justify-end mb-4">
            <v-btn type="button" variant="outlined" @click="() => $props.onHide()">No</v-btn>
            <v-btn type="submit" color="error" variant="flat" @click="() => $props.handleDelete()"
              >Yes</v-btn
            >
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  <script lang="ts" src="./modalDelete.ts"></script>
  <style lang="scss" src="./modalDelete.scss" scoped></style>
  