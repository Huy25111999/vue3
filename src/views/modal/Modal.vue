<template>
    <div class="wrapper px-8 mt-5">
        <v-card class="p-4 mb-5 pb-3">
            <div class="table-container search-user">
                <v-card-title>Tìm kiếm người dùng</v-card-title>
                <v-card-text>
                    <v-card> 
                        <v-tabs v-model="tab" bg-color="primary" align-tabs="start">
                            <v-tab value="one">Dialog</v-tab>
                            <v-tab value="two">Modal confirm</v-tab>
                            <v-tab value="three">Modal preview</v-tab>
                        </v-tabs>
                        
                        <v-card-text>  
                            <div class="wrapper-content p-4">
                                <v-window v-model="tab">
                                    <v-window-item value="one">

                                        <!-- Open modal -->
                                        <div class="text-center">
                                            <v-btn color="primary" @click="dialog = true">OPen dialog</v-btn>
                                            <v-dialog v-model="dialog" width="60%">
                                                <v-card>
                                                    <v-card-title>
                                                        <div class="border-header flex justify-between">
                                                            <div class="title">Dialog</div>
                                                            <div class="close-btn cursor-pointer" @click="dialog = false">
                                                                <font-awesome-icon icon="fa-solid fa-xmark" />
                                                            </div>
                                                        </div>
                                                    </v-card-title>
                                                    <v-card-text>
                                                        Content
                                                    </v-card-text>
                                                        <v-card-actions>
                                                            <div class="footer w-[100%] px-2">
                                                                <div class="border-footer flex justify-end">
                                                                    <div class="mt-3">
                                                                        <v-spacer></v-spacer>
                                                                        <v-btn color="green-darken-1"  type="button" variant="outlined" @click="dialog = false">Cancel</v-btn>
                                                                        <v-btn color="primary" type="submit" variant="flat">Save</v-btn>
                                                                    </div>
                                                                </div>
                                                            
                                                            </div>
                                                        </v-card-actions>
                                                    
                                                </v-card>
                                            </v-dialog>
                                        </div>

                                    </v-window-item>
                                    <v-window-item value="two">
                                        <div class="text-center">
                                           <v-btn variant="tonal" @click="uiEvents.onShowConfirm('reject')" class="mr-4">Reject</v-btn>
                                            <v-btn variant="flat" color="primary" @click="uiEvents.onShowConfirm('verify')">Verify</v-btn>
                                        </div>

                                        <ModalConfirm
                                            :show="showConfirm"
                                            :onHide="uiEvents.onHideConfirm"
                                            :title="actionSelected==='reject'? 'Reject': 'Verify'"
                                            :content="actionSelected==='reject' ? 'Bạn có chắc chắc muốn reject?' : 'Bạn có chắc chắc muốn verify?'"
                                            :handleConfirm = "handleConfirm"
                                        ></ModalConfirm>
                                    </v-window-item>
                                    <v-window-item value="three">
                                        <div class="text-center">
                                           <v-btn variant="tonal" @click="uiEvents.onShowConfirm('reject')" class="mr-4">Reject</v-btn>
                                        </div>
                                        <ModalConfirm
                                            :show="showConfirm"
                                            :onHide="uiEvents.onHideConfirm"
                                            :title="actionSelected==='reject'? 'Reject': 'Verify'"
                                            :content="actionSelected==='reject' ? 'Bạn có chắc chắc muốn reject?' : 'Bạn có chắc chắc muốn verify?'"
                                            :handleConfirm = "handleConfirm"
                                        ></ModalConfirm>
                                        <!-- <ModalPreiew :show="showConfirm" :onHide="uiEvents.onHideConfirm">
                                            <div class="image-preview">
                                                <img
                                                :src="getCurrentUrl(filePreview.filename, filePreview?.contentType)"
                                                />
                                            </div>
                                        </ModalPreiew> -->
                                    </v-window-item>
                                </v-window>
                            </div> 
                        </v-card-text>
                    </v-card>
                </v-card-text>
            </div>
        </v-card>

        <!-- Tabs 2----------- -->
        <v-card class="p-8 mb-5 pb-3">
            <v-tabs
            v-model="tab"
            color="deep-purple-accent-4"
            align-tabs="center"
            >
                <v-tab :value="1">Landscape</v-tab>
                <v-tab :value="2">City</v-tab>
                <v-tab :value="3">Abstract</v-tab>
            </v-tabs>
            <div class="wrapper-content p-4">
                <v-window v-model="tab">
                    <v-window-item
                        v-for="n in 3"
                        :key="n"
                        :value="n"
                    >
                        <v-container fluid>
                            <v-row>
                                <v-col
                                v-for="i in 6"
                                :key="i"
                                cols="12"
                                md="4"
                                >
                                <v-img
                                    :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                                    :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                                    aspect-ratio="1"
                                ></v-img>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-window-item>
                </v-window>
            </div>
        </v-card>
    </div>
</template>
<script lang="ts" src="./modal.component.ts"></script>
<style lang="scss" scoped src="./modal.scss"></style>