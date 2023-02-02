
import { defineComponent, reactive, ref } from "vue";
import { Form } from "vee-validate";
import InputField from "@/assets/controls/InputField.vue";
import SelectField from "@/assets/controls/SelectField.vue";
import TextareaField from "@/assets/controls/TextareaField.vue";
import * as Yup from "yup";

import { Enum } from "@/types";
import * as actions from "@/api/roles/roleActions";
import { useSnackBar } from "@/helpers/useSnackbar";

export default defineComponent({
    props:["show", "onHide", "fetchRolesFn"],
    components:{
        Form, InputField, SelectField, TextareaField
    },
    setup(props, ctx){
        const methodOptions = [
            {
              label: "GET",
              value: "get",
            },
            {
              label: "PUT",
              value: "put",
            },
            {
              label: "POST",
              value: "post",
            },
            {
              label: "DELETE",
              value: "delete",
            },
          ];
        const formAddRole = reactive<any>({
            name:"",
            code:"",
            path:"",
            description:"",
            method:"get"
        });

        const formRef = ref();
        const snackNotification = useSnackBar();

        const roleSchema= Yup.object({
          name: Yup.string().required("name required").max(50,"max length 50"),
          code: Yup.string().required("code required").max(50,"max length 50"),
          path: Yup.string().required("path required").max(50,"max length 50"),
          description: Yup.string().required("description required").max(50,"max length 50"),

        })

        const handleSubmit =(values: any)=>{
          const request:Enum.IRole = {
            name: values.name?.trim(),
            code: values.code?.trim(),
            path: values.path?.trim(),
            description: values.description?.trim(),
            method: formAddRole.method,
            status: 1
          }
          actions.creatRole(request).then((res:any) =>{
            snackNotification.showSuccess("Tạo mới thành công")
            props.fetchRolesFn();
            props.onHide();
            formRef.value.resetForm();
            console.log('successs');
            
            
          }).catch((error) =>{
            snackNotification.showSuccess("Tạo mới thất bại")
            
          })
        }

        return{
            methodOptions,
            formAddRole,
            roleSchema,
            handleSubmit,
            formRef
        }
    }
})