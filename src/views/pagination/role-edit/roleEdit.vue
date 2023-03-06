<template>
    <v-dialog v-model="$props.show" class="w-[50%]">
        <v-card>
            <v-card-title>
                <div class="flex justify-between">
                    <h4>Edit role</h4>
                    <div class="close-btn" @click="$props.onHide">
                        <span class="material-icons">close</span>                   
                    </div>
                </div>
            </v-card-title>

            <Form :validation-schema="roleSchema"
                @submit="handleSubmit"
                ref="formRef">
                <v-card-text>
                    <v-row>
                        <v-col cols="12">
                            <InputField
                            name="name"
                            :label="`name`"
                            :placeholder="`name`"
                            v-model.trim="formEditRole.name">
                            </InputField>
                        </v-col>
                        <v-col cols="12">
                            <InputField
                            name="code"
                            :label="`code`"
                            :placeholder="`code`"
                            v-model.trim="formEditRole.code">
                            </InputField>
                        </v-col>

                        <v-col cols="12">
                            <InputField
                            name="path"
                            :label="`path`"
                            :placeholder="`path`"
                            v-model.trim="formEditRole.path">
                            </InputField>
                        </v-col>

                        <v-col cols="12">
                            <SelectField
                                name="method"
                                :label="`method`"
                                :placeholder="`method`"
                                v-model.trim="formEditRole.method"
                                :items="methodOptions"
                                :modelValue="get">
                            </SelectField>
                        </v-col>

                        <v-col cols="12">
                            <TextareaField
                            name="description"
                            :label="`description`"
                            :placeholder="`description`"
                            v-model.trim="formEditRole.description">
                            </TextareaField>
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-card-action>
                    <div class="flex justify-end mb-4">
                        <v-btn 
                            @click="$props.onHide"
                            type="button"
                            variant="outlined"
                        >Cancel</v-btn>
                        <v-btn 
                            type="submit"
                            color="primary"
                            variant="flat"
                            class="mx-4"
                        >Save</v-btn>
                    </div>
                </v-card-action>
            </Form>
        </v-card>

    </v-dialog>
</template>
<script src="./roleEdit.ts" lang="ts"></script>