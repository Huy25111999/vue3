<template>
    <label>{{ label }} </label>
    <div
      class="drop-file-input mt-3"
      ref="wrapperRef"
      @dragenter="onDragEnter"
      @dragleave="onDragLeave"
      @drop="onFileDrop"
    >
      <div v-if="!filePreview">
        <div class="__label flex flex-column justify-center items-center">
          <img src="@/common/assets/upload.png" class="mb-3" />
          <p>"add_admin_file_avatar"</p>
        </div>
        <!-- <Field :name="name" type="file" @input ="onFileDrop" 
              ref="myFile"
              accept="image/*" /> -->
  
        <div class="image">
          <input type="file" ref="myFile" @input="onFileDrop" accept=".jpeg, .jpg, .png"><br/>
          <div v-if="imageError" class="imageError">
             <p> {{imageError}}</p>
          </div>
        </div>
      </div> 
      <div class="preview-img w-full h-full flex justify-center items-center" v-else>
        <img :src="filePreview" alt="preview" />
        <button class="btn-remove" @click="onRemove">
          <font-awesome-icon icon="fa-solid fa-circle-xmark" />
        </button>
  
      </div>
    </div>
  </template>
  <script lang="ts">
  import { Field, useField } from "vee-validate";
  import { defineComponent, ref, watchEffect } from "vue";
  
  const MAX_SIZE = 10*1024*1024;
  ;
  
  export default defineComponent({
    name: "InputAvatar",
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
        required: {
        type: Boolean,
      }
    },
  
    setup(props, ctx) {
      const wrapperRef = ref();
      const filePreview = ref("");
      const imageError = ref ("");
      const size = ref("");
  
      watchEffect(() => {
        filePreview.value = props.modelValue;
      });
  
      const onDragEnter = () => {
        wrapperRef.value.classList.add("dragover");
      };
  
      const onDragLeave = () => {
        // wrapperRef.value.classList.remove("dragover");
      };
  
      const onFileDrop = (e: any) => {
        imageError.value = " ";
        const file = e.target.files[0];
  
        if (file) {
          wrapperRef.value.classList.remove("dragover");
          ctx.emit("input", file);
          filePreview.value = URL.createObjectURL(file);
  
          console.log("filePreview", filePreview);
          
        }  
  
        if(!file || file.type.indexOf('image/') !== 0) return;
          size.value = file.size;
          if(size.value > MAX_SIZE) {
            imageError.value = intl('add_admin_file_size');
            filePreview.value = "";
            return;
          }
        
      };
      
      const handleChange = (e: any) => {};
  
      const onRemove = () => {
        filePreview.value = "";
        ctx.emit("input", "");
      };

      return {
        onDragEnter,
        onDragLeave,
        onFileDrop,
        onRemove,
        handleChange,
        filePreview,
        wrapperRef,
        MAX_SIZE, 
        imageError,
        size
        };
    },
  });
  </script>
  <style lang="scss" scoped>
  [v-cloak] {display: none}
  
  .imageError {
    color: red;
  }
  .drop-file-input {
    position: relative;
    width: 400px;
    height: 200px;
    border: 3px dashed #2e81b9;
    border-radius: 20px;
  
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f5f4f4;
    input {
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
  
    .__label {
      img {
        height: 50px;
      }
    }
  
    .preview-img {
      position: relative;
      img {
        max-height: 190px;
        object-fit: contain;
      }
      .btn-remove {
        position: absolute;
        font-size: 17px;
        top: 4px;
        right: 4px;
      }
    }
  }
  
  .dragover {
    opacity: 0.6;
  }
  </style>
  