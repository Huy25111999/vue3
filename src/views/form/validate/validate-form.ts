

import { Field, Form } from "vee-validate";
import { computed, defineComponent, onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import * as Yup from "yup";

export default defineComponent({
  name: "WalletsPage",
  components: {
    Form,
    Field,
  },
  setup() {
    const store = useStore();
    const clickSubmit = ref(false);


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
          .required('Accept Ts & Cs is required')
      });

    const formAddValues = reactive({
      cardNumber: "",
      cardExpYear: "",
      cardCVC: "",
      cardName: "",
      cardEmail: ""
    });
    const onSubmit = (values:any) => {        
        console.log("ágdvj");
        
    }

    onMounted(()=>{

    })

    return {
        onSubmit,
        formAddValues,
        schema
        
    };
  },
});
