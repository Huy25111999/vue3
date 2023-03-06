

import { Field, Form } from "vee-validate";
import { computed, defineComponent, onMounted, reactive, ref, watch } from "vue";
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
    const isValid = ref("");

    const schemaAddCard = Yup.object().shape({
      cardName: Yup.string()
          .required("wallet.top-up.error.card_name_require")
          .nullable()
          .max(50, "wallet.top-up.error.card_name_max"),
      cardNumber: Yup.string()
          .required("wallet.top-up.error.account_number_require")
          .nullable()
          .max(20, "wallet.top-up.error.account_number_max"),
      cardEmail: Yup.string()
        .max(50, "admin_email_maxLength")
        .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.[com]\w{2,2})+$/, "admin_account_email_invalid")
        .required("admin_account_email_required")
        .email("admin_account_email_invalid"),
          // .matches(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[com]\w{2,2})+$/, "wallet.top-up.error.emailInvalid")
          // .max(50, "wallet.top-up.error.card_email_max")
          // .required("wallet.top-up.error.email_require"),
        
        cardCVC: Yup.string()
          .required("wallet.top-up.error.swiftCode_require")
          .nullable()
          .max(50, "wallet.top-up.error.swiftCode_max"),
      cardExpYear: Yup.string()
          .required("wallet.top-up.error.cardExpYear")
  })

    const formAddValues = reactive({
      cardNumber: "",
      cardExpYear: "",
      cardCVC: "",
      cardName: "",
      cardEmail: ""
    });

    onMounted(()=>{

    })

    const checkValidate = ref({
      cardNumber: false,
      cardExpYear: false,
      cardCVC: false,
      cardName: false,
      cardEmail: false
    });
    const validate = (field:any) =>{
      checkValidate.value[field] = true;
      schemaAddCard.validateAt(field, schemaAddCard[field]);
  }

    const handleSubmit = (values:any) => {        
      checkValidate.value.cardNumber = true;
      checkValidate.value.cardExpYear = true;
      checkValidate.value.cardCVC = true;
      checkValidate.value.cardName = true;
      checkValidate.value.cardEmail = true;
      // schemaAddCard.validate(values).then(() => {
      //     const listExpValue: string[] = formAddValues.cardExpYear.includes('/') && formAddValues.cardExpYear.split('/') || [];
      //     const value = {
      //         customerId: store.getters.auth.customerId,
      //         cardNumber: formAddValues.cardNumber.replace(/\s\s+/g, ' '),
      //         cardExpYear: Number(listExpValue && listExpValue.length >= 2 && listExpValue[1].trim()),
      //         cardExpMonth: Number(listExpValue && listExpValue.length >= 2 && listExpValue[0].trim()),
      //         cardCVC: Number(formAddValues.cardCVC),
      //         cardName: formAddValues.cardName,
      //         cardEmail: formAddValues.cardEmail,
      //         cardType: 'visa'
      //     };

      //             resetFormValues();

      //         })
    }

    return {
        handleSubmit,
        formAddValues,
        schemaAddCard,
        checkValidate,
        validate,
    };
  },
});
