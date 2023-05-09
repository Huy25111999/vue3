

import { Field, Form } from "vee-validate";
import { computed, defineComponent, onMounted, reactive, ref, toRaw, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import * as Yup from "yup";
import InputAvatar from "@/assets/controls/InputAvatar.vue";
import SelectField from "@/assets/controls/SelectField.vue";
import InputDatePicker from "@/assets/controls/InputDatePicker.vue";
import moment from "moment";
import InputField from "@/assets/controls/InputField.vue";

const MAX_SIZE = 10*1024*1024;

export default defineComponent({
  name: "ValidateForm",
  components: {
    Form,
    Field,
    InputAvatar,
    SelectField,
    InputField,
    InputDatePicker
  },
  setup(props, ctx) {
    const store = useStore();
    const clickSubmit = ref(false);
    const files = ref(Array);

    const schema = Yup.object().shape({
      title: Yup.string()
          .required('Title is required'),
      firstName: Yup.string()
          .required('First Name is required'),
      lastName: Yup.string()
          .required('Last name is required'),
      dob: Yup.string()
          .required('Date of Birth is required')
          .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Date of Birth must be a valid date in the format YYYY-MM-DD'),
      email: Yup.string()
        .email("admin_account_email_invalid")
        .max(50, "admin_email_maxLength")
        .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.[com]\w{2,2})+$/, "admin_account_email_invalid")
        .required("admin_account_email_required"),
         // .matches(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[com]\w{2,2})+$/, "wallet.top-up.error.emailInvalid"),

      password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
      confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Confirm Password is required'),
      acceptTerms: Yup.string()
          .required('Accept Ts & Cs is required'),
      dateTo: Yup.date().when("dateFrom", (dateFrom, schema) => {
        if (dateFrom) {             
          const dayAfter = new Date(moment(new Date(dateFrom.getTime())).subtract(1, "days").toDate().setHours(0,0,0));
          const beforeOneMonth = new Date(
            moment(dayAfter).add(29, "days").toDate().setHours(24,0,0)
          );          
          return schema
            .min(dayAfter, "customer_detail_user_history_min_length")
            .max(
              beforeOneMonth,
              "customer_detail_user_history_max_length"
            );
        }
        return schema;
      }),

      // dateTo: Yup.date().when("dateFrom", (dateFrom, schema) => {
      //   if (dateFrom) {
      //     const dayAfter = new Date(dateFrom.getTime());
      //     const beforeOneMonth = new Date(
      //       moment(dayAfter).add(30, "days").toDate()
      //     );
      //     return schema
      //       .min(dayAfter, "customer_detail_user_history_min_length")
      //       .max(
      //         beforeOneMonth,
      //         "customer_detail_user_history_max_length"
      //       );
      //   }
      //   return schema;
      // }),
    });

    const options = [
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
    const formAddValues = reactive({
      title:"Mr",
      firstName: "",
      lastName: "",
      dob: "",
      email: "",
      password: "",
      confirmPassword:"",
      acceptTerms: false,
      files: undefined,
      dateFrom: moment().subtract(7, "day").toDate(),
      dateTo: moment().toDate(),
      avatar: undefined
    });
 
    const onSubmit = (values:any) => {        
        const request = {
          ...toRaw(formAddValues),
          files:  files.value
        }        

        console.log("request",request);
    }

    const onFileChange = (file: any)=>{
      formAddValues.avatar = file;
      console.log("avatar", formAddValues.avatar);

    }

    onMounted(()=>{

    })


    // file avatar 
    const wrapperRef = ref();
    const filePreview = ref("");
    const imageError = ref ("");
    const size = ref();

    watchEffect(() => {
      filePreview.value 
    });

    const onDragEnter = () => {
      wrapperRef.value.classList.add("dragover");
    };

    const onDragLeave = () => {
       wrapperRef.value.classList.remove("dragover");
    };

    const onFileDrop = (e: any) => {
      imageError.value = " ";
      const file = e.target.files[0];
      console.log("file--------", file);
      files.value = file;
      
      if (file) {
        wrapperRef.value.classList.remove("dragover");
        ctx.emit("input", file);
        filePreview.value = URL.createObjectURL(file);

        console.log("filePreview", filePreview);
        
      }  

      if(!file || file.type.indexOf('image/') !== 0) return;
      size.value = file.size;
      if(size.value > MAX_SIZE) {
        imageError.value = 'Kích thước avatar phải dưới 10MB';
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
      onSubmit,
      formAddValues,
      schema,
       // handleFormData
      onDragEnter,
      onDragLeave,
      onFileDrop,
      onRemove,
      handleChange,
      filePreview,
      wrapperRef,
      MAX_SIZE, 
      imageError,
      size,
      options,
      onFileChange
        
    };
  },
});
