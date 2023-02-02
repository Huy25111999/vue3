<template>
    <div class="wrapper px-8 mt-5">
      <v-card class="p-4 mb-5 pb-3">
        <div class="table-container search-user">
          <v-card-title>Tìm kiếm người dùng</v-card-title>
          <div class="px-8">
  
            <!-- Search -->
            <form>
            <div class="row pt-4">
              <div class="col-sm-12 col-md-6 col-lg-4">
                <div class="form-group">
                  <label>Card Number:</label>
                  <div class="input-group mb-0">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon1"><i ></i></span>
                    </div>
                    <input ref="cardNumInput" :data-error="(cardErrors.cardNumber)?true:false" v-model="cardNumber" type="tel" class="form-control " placeholder="#### #### #### ####">
                  </div>
                  <div v-if="cardErrors.cardNumber" class="error">
                    <small>{{ cardErrors.cardNumber }}</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="row pt-2">
              <div class="col-4 col-lg-2">
                <div class="form-group">
                  <label>Card Expiration:</label>
                  <input ref="cardExpInput" id="card-exp" :data-error="(cardErrors.cardExpiry)?true:false" v-model="cardExpiry" maxlength="10" class="form-control" v-cardformat:formatCardExpiry>
                  <div v-if="cardErrors.cardExpiry" class="error">
                    <small>{{ cardErrors.cardExpiry }}</small>
                  </div>
                </div>
              </div>
              <div class="col-4 col-lg-2">
                <div class="form-group">
                  <label>Card CVC:</label>
                  <input ref="cardCvcInput" :data-error="(cardErrors.cardCvc)?true:false" v-model="cardCvc" class="form-control" v-cardformat:formatCardCVC>
                  <div v-if="cardErrors.cardCvc" class="error">
                    <small>{{ cardErrors.cardCvc }}</small>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-4">
                <div class="form-group">
                  <label>Restrict Numeric:</label>
                  <input placeholder="Only numbers can be entered here..." v-model="cardPostal" class="form-control" v-cardformat:restrictNumeric>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 pt-2">
                <button type="button" class="btn btn-primary" @click="validate">Validate Card Details</button>
              </div>
            </div>
          </form>
  
          </div>
        </div>
      </v-card>
    </div>
  
  </template>
  
  <script src="./validate-form.ts" lang="ts"></script>
  <style src="./validate-form.scss" lang="scss"></style>

  