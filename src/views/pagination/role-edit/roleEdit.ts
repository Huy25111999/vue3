
import { defineComponent, reactive, ref, watchEffect } from "vue";
import { Form } from "vee-validate";
import InputField from "@/assets/controls/InputField.vue";
import SelectField from "@/assets/controls/SelectField.vue";
import TextareaField from "@/assets/controls/TextareaField.vue";
import * as Yup from "yup";
import type { Enum } from "@/types";


export default defineComponent({
    props:["show", "onHide", "fetchRolesFn", "roleSelected"],
    components:{
        Form, InputField, TextareaField, SelectField
    },
    setup(props, ctx){
        const methodOptions = [
            {
              label: "GET",
              value: "GET",
            },
            {
              label: "PUT",
              value: "PUT",
            },
            {
              label: "POST",
              value: "POST",
            },
            {
              label: "DELETE",
              value: "DELETE",
            },
          ];
        const formEditRole = reactive<any>({
            name:"",
            code:"",
            path:"",
            description:"",
            method:"get"
        });

        const formRef = ref();
        const roleSchema= Yup.object({
            name: Yup.string().required("name required").max(50,"max length 50"),
            code: Yup.string().required("code required").max(50,"max length 50"),
            path: Yup.string().required("path required").max(50,"max length 50"),
            description: Yup.string().required("description required").max(50,"max length 50"),
          });

        watchEffect(()=>{
          console.log("item edit", props.roleSelected);
          
            if(props.roleSelected){
               formEditRole.name = props?.roleSelected?.name;
               formEditRole.code = props?.roleSelected?.code; 
               formEditRole.description = props?.roleSelected?.description; 
               formEditRole.path = props?.roleSelected?.path; 
               formEditRole.method = props?.roleSelected?.method;  
            }
        })

        const handleSubmit=(values:any)=>{
          //  const currentRoles = values.roles?.map((roleItem: any) => JSON.parse(roleItem));

            const formData: Enum.IRole = {
                ...values,
                status: 1
            }
            console.log('form data', formData);
            
        }

        return{
            methodOptions,
            formEditRole,
            formRef,
            roleSchema,
            handleSubmit
        }
    }
})