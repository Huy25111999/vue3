
<template>
    <v-dialog v-model="$props.show" persistent width="30%">
        <v-card>
            <v-card-title>
                <div class="border-header">
                    {{$props.title }}
                </div>
            </v-card-title>
            <v-card-content>
                <v-card-text>
                    {{$props.content }}
                </v-card-text>
                <v-card-actions>
                    <div class="flex justify-end mb-4 w-full">
                        <v-btn type="button" variant="outlined" @click="$props.onHide">No</v-btn>
                        <v-btn type="button" color="primary" variant="flat" elevation="0" @click="$props.handleConfirm">Yes</v-btn>
                    </div>
                </v-card-actions>
            </v-card-content>
        </v-card>
    </v-dialog>
</template>
<script lang="ts" src="./modalConfirm.component.ts"></script>
<style lang="scss" scoped>
    .border-header {
        border-bottom: 1px solid #ebe3e3;
    }
</style>