<template>
    <div class="wrapper px-8 mt-5">
      <v-card class="p-4 mb-5 pb-3">
        <div class="table-container search-user">
          <v-card-title>Tìm kiếm người dùng</v-card-title>
          <div class="px-8">
  
            <!-- Search -->
            <div class="card m-3">
                <h5 class="card-header">Vue 3 + VeeValidate - Form Validation Example (Options API)</h5>
                <div class="card-body">
                    <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
                        <v-row >
                            <v-col cols="4" sm="4" md="4" pr="6">
                                <div class="form-group col">
                                    <p>Title</p>
                                    <Field name="title" as="select" class="form-control" :class="{ 'is-invalid': errors.title }">
                                        <option value=""></option>
                                        <option value="Mr">Mr</option>
                                        <option value="Mrs">Mrs</option>
                                        <option value="Miss">Miss</option>
                                        <option value="Ms">Ms</option>
                                    </Field>
                                    <div class="invalid-feedback">{{errors.title}}</div>
                                </div>
                            </v-col>
                            <v-col cols="4" sm="4" md="4" pr="6">
                                <div class="form-group col-5">
                                    <p>First Name</p>
                                    <Field name="firstName" type="text" v-cardformat:formatCardNumber class="form-control" :class="{ 'is-invalid': errors.firstName }" />
                                    <div class="invalid-feedback">{{errors.firstName}}</div>
                                </div>
                            </v-col>
                            <v-col cols="4" sm="4" md="4" pr="6">
                                <div class="form-group col-5">
                                    <p>Last Name</p>
                                    <Field name="lastName" type="text" v-cardformat:formatCardNumber class="form-control" :class="{ 'is-invalid': errors.lastName }" />
                                    <div class="invalid-feedback">{{errors.lastName}}</div>
                                </div>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="6" sm="6" md="6" pr="6">
                                <div class="form-group col">
                                    <p>Date of Birth</p>
                                    <Field name="dob" type="date" class="form-control" :class="{ 'is-invalid': errors.dob }" />
                                    <div class="invalid-feedback">{{errors.dob}}</div>
                                </div>
                            </v-col>
                            <v-col cols="6" sm="6" md="6" pr="6">
                                <div class="form-group col">
                                    <p>Email</p>
                                    <Field name="email" type="text" class="form-control" :class="{ 'is-invalid': errors.email }" />
                                    <div class="invalid-feedback">{{errors.email}}</div>
                                </div>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="6" sm="6" md="6" pr="6">
                                <div class="form-group col">
                                    <p>Password</p>
                                    <Field name="password" type="password" v-cardformat:formatCardNumber class="form-control" :class="{ 'is-invalid': errors.password }" />
                                    <div class="invalid-feedback">{{errors.password}}</div>
                                </div>
                            </v-col>
                            <v-col cols="6" sm="6" md="6" pr="6">
                                <div class="form-group col">
                                    <p>Confirm Password</p>
                                    <Field name="confirmPassword" type="password" class="form-control" :class="{ 'is-invalid': errors.confirmPassword }" />
                                    <div class="invalid-feedback">{{errors.confirmPassword}}</div>
                                </div>
                            </v-col>
                        </v-row>
                        <v-row class="mt-4">
                            <div class="form-check">
                                <Field name="acceptTerms" type="checkbox" id="acceptTerms" value="true" class="form-check-input" :class="{ 'is-invalid': errors.acceptTerms }" />
                                <p for="acceptTerms" class="form-check-label">Accept Terms & Conditions</p>
                                <div class="invalid-feedback">{{errors.acceptTerms}}</div>                           
                            </div>
                            
                        </v-row>

                        <v-row class="mt-8">
                            <v-btn type="submit" color="primary" class="btn btn-primary mr-1">Register</v-btn>
                            <v-btn type="reset" class="btn btn-secondary">Reset</v-btn>
                        </v-row>
                    </Form>
                </div>
            </div>    
  
          </div>
        </div>
      </v-card>
    </div>
  </template>
  
  <script src="./validate-form.ts" lang="ts"></script>
  <style src="./validate-form.scss" lang="scss" scoped></style>

  