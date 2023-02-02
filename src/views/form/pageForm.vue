<template>
    <div class="wrapper px-8 mt-5">
      <v-card class="p-4 mb-5 pb-3">
        <div class="table-container search-user">
          <v-card-title>Tìm kiếm người dùng</v-card-title>
          <div class="px-8">
  
            <!-- Search -->
            <Form
            @submit="handleSubmit"
            :validation-schema="schemaAddCard"
            v-slot="{ errors }"
            class="grid gap-6 mb-3 md:grid-cols-2">
            <div>
              <ion-label class="mb-5">Email</ion-label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                       viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input v-model="formAddValues.cardEmail"
                       :class="{ 'hasError': !!errors.cardEmail && checkValidate.cardEmail && !formAddValues.cardEmail.length }"
                       @blur="validate('cardEmail')"
                       name="cardEmail"
                       type="text" id="input-group-1"
                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="name@flowbite.com">
              </div>
              <p v-if="!!errors.cardEmail && checkValidate.cardEmail && !formAddValues.cardEmail.length" class="validate-message">
                {{errors.cardEmail}}
              </p>
            </div>
            <div>
              <ion-label class="mb-5">Card name<span>*</span></ion-label>
              <input v-model="formAddValues.cardName"
                     :class="{ 'hasError': !!errors.cardName && checkValidate.cardName && !formAddValues.cardName.length}"
                     @blur="validate('cardName')"
                     name="cardName"
                     type="text" id="first_name"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="John" required>
              <div v-if="!!errors.cardName && checkValidate.cardName && !formAddValues.cardName.length" class="validate-message">
                {{errors.cardName}}
              </div>
            </div>
            <div>
              <ion-label class="mb-5">Card number<span>*</span></ion-label>
              <input v-model="formAddValues.cardNumber" v-cardformat:formatCardNumber
                     :class="{ 'hasError': !!errors.cardNumber && checkValidate.cardNumber && !formAddValues.cardNumber.length }"
                     @blur="validate('cardNumber')"
                     name="cardNumber"
                     type="text" id="first_name"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="John" required>
              <div v-if="!!errors.cardNumber && checkValidate.cardNumber && !formAddValues.cardNumber.length" class="validate-message">
                {{errors.cardNumber}}
              </div>
            </div>
            <div>
              <ion-label class="mb-5">Card CVC<span>*</span></ion-label>
              <input v-model="formAddValues.cardCVC" v-cardformat:formatCardCVC
                     @blur="validate('cardCVC')"
                     :class="{ 'hasError': !!errors.cardCVC && checkValidate.cardCVC && !formAddValues.cardCVC.length }"
                     name="cardCVC"
                     type="text" id="first_name"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="John" required>
              <div v-if="!!errors.cardCVC && checkValidate.cardCVC && !formAddValues.cardCVC.length" class="validate-message">
                {{errors.cardCVC}}
              </div>
            </div>

            <div>
              <ion-label class="mb-5">Card expiry<span>*</span></ion-label>
              <input v-model="formAddValues.cardExpYear" v-cardformat:formatCardExpiry
                     name="cardExpYear"
                     @blur="validate('cardExpYear')"
                     :class="{ 'hasError': !!errors.cardExpYear && checkValidate.cardExpYear  && !formAddValues.cardExpYear.length}"
                     type="text" id="first_name"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="John" required>
              <div v-if="!!errors.cardExpYear && checkValidate.cardExpYear && !formAddValues.cardExpYear.length" class="validate-message">
                {{ errors.cardExpYear}}
              </div>
            </div>
            <button class="btn w-[300px] h-[40px] mt-6 btn-primary sbmBtn bg-primary" type="submit" @click="handleSubmit(formAddValues)">Submit</button>
          </Form>
  
          </div>
        </div>
      </v-card>
    </div>
  
  </template>
  
  <script src="./pageForm.ts" lang="ts"></script>
  <style src="./pageForm.scss" ></style>
  