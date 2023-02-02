import { computed, defineComponent, onMounted, reactive, ref } from "vue";

export default defineComponent({
  data() {
    return {
     // cardNumber: null,
      cardExpiry: null,
      cardCvc: null,
      cardPostal: null,
      cardErrors: {},
      // declaring card-brand in data{} enables card brand name/classes.
      cardBrand: null,
    } 
  },
  methods: {
    validate: function(){

      // init
      this.cardErrors = {};
      
      // validate card number
      // if(!this.$cardFormat.validateCardNumber(this.cardNumber)){
      //   this.cardErrors.cardNumber = "Invalid Credit Card Number.";
      // };

      // validate card expiry
      // if (!this.$cardFormat.validateCardExpiry(this.cardExpiry)) {
      //   this.cardErrors.cardExpiry = "Invalid Expiration Date.";
      // };

      // validate card CVC
      // if (!this.$cardFormat.validateCardCVC(this.cardCvc)) {
      //   this.cardErrors.cardCvc = "Invalid CVC.";
      // };

    },

  },
  watch: {
    // handle auto-focus to next field
    // Note: since CVC can be 3 OR 4 digits we don't watch it
    // cardNumber: function(val){
    //   if(this.$cardFormat.validateCardNumber(val)){
    //     this.$refs.cardExpInput.focus();
    //   }
    // },
    // cardExpiry: function (val) {
    //   if (this.$cardFormat.validateCardExpiry(val)) {
    //     this.$refs.cardCvcInput.focus();
    //   }
    // }
  },
  onMounted(){
  //  this.$refs.cardNumInput.focus();
  } 
});
