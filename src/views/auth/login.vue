<template>
  <div class="wapper">
    <div class="center">
      <h1>Login</h1>
        <Form class="form-container" @submit="onSubmit">
            <div class="txt_field">
              <v-text-field v-model="form.account" label="username" ></v-text-field>
              <span></span>
            </div>

            <div class="txt_field">
              <v-text-field v-model="form.password" label="password"  type="password" ></v-text-field>
              <span></span>
            </div>

            <div class="pass">Forgot Password?</div>
            <input type="submit" value="Login" >

            <div class="signup_link">
              Not a member?
              <!-- <router-link :to="{name:'Register', params:{}}" class="button"> -->
                 <a href="#">Signup</a>
              <!-- </router-link> -->
            </div>
        </Form>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { reactive } from 'vue';
import * as actions from "@/api/auth/authAction";
import { useRouter } from "vue-router";
import { useStore } from 'vuex';
import { Form } from "vee-validate";
import { useSnackBar } from '@/helpers/useSnackbar';

  export default{
    components:{
      Form
    },
    setup(props, ctx){
        const form = reactive<any>({
            account:"",
            password:""
        });
        const snackNotification = useSnackBar();

        const  router = useRouter();
        const store = useStore();
        const onSubmit=() =>{
            // actions.login(form).then((res:any) =>{
            
            //     console.log('res', res);
            //     const token = res.data.token;
            //     console.log('token',token);
                
            //     localStorage.setItem('token', token);
            //     axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            //     router.push("/home");
            // }).catch((err:any)=>{
            //     console.log(err);
                
            // })

            actions
            .login(form)
            .then((res:any) => {
              router.push("/");
              store.dispatch("auth/logged", res);
              snackNotification.showSuccess('login_successfully');

            })
            .catch((err:any) => {

              if(err.response.data.message === "Account not exist" || err.response.data.message === "Không tìm thấy tài khoản")
              {
                snackNotification.showError("login_message_exist");
              }
              else if(err.response.data.message === "Account must have at least 5 digits" || err.response.data.message === "Tài khoản phải có ít nhất 5 kí tự"){
                snackNotification.showError("login_message_least_5_digits");
              }
              else if(err.response.data.message === "Password NOT Matched"){
                snackNotification.showError("login_message_not_matched");
              }
              else{
                snackNotification.showError(err.response.data.message);
              }
          });
        }

        return{
            form,
            onSubmit
        }
    }
  }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&family=Poppins:wght@400;500;600&display=swap');
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    }

    body{
    margin: 0;
    padding: 0;
    background: linear-gradient(120deg,#2980b9, #8e44ad);
    height: 100vh;
    overflow: hidden;
    }

    .wapper {
      background: linear-gradient(120deg,#2980b9, #8e44ad);      height: 100vh;
    }
    .center{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    background: white;
    border-radius: 10px;
    box-shadow: 10px 10px 15px rgba(0,0,0,0.05);
    }
    .center h1{
    text-align: center;
    padding: 20px 0;
    border-bottom: 1px solid silver;
    }
    .center form{
    padding: 0 40px;
    box-sizing: border-box;
    }
    form .txt_field{
    position: relative;
    /*border-bottom: 2px solid #adadad;*/
    margin: 30px 0;
    }
    .txt_field input{
    width: 100%;
    padding: 0 5px;
    height: 40px;
    font-size: 16px;
    border: none;
    background: none;
    outline: none;
    }
    .txt_field label{
    position: absolute;
    top: 50%;
    left: 5px;
    color: #adadad;
    transform: translateY(-50%);
    font-size: 16px;
    pointer-events: none;
    transition: .5s;
    }
    .txt_field span::before{
    content: '';
    position: absolute;
    top: 40px;
    left: 0;
    width: 0%;
    height: 2px;
    background: #2691d9;
    transition: .5s;
    }
    .txt_field input:focus ~ label,
    .txt_field input:valid ~ label{
    top: -5px;
    color: #2691d9;
    }
    .txt_field input:focus ~ span::before,
    .txt_field input:valid ~ span::before{
    width: 100%;
    }
    .pass{
    margin: -5px 0 20px 5px;
    color: #a6a6a6;
    cursor: pointer;
    }
    .pass:hover{
    text-decoration: underline;
    }
    input[type="submit"]{
    width: 100%;
    height: 50px;
    border: 1px solid;
    background: #2691d9;
    border-radius: 25px;
    font-size: 18px;
    color: #e9f4fb;
    font-weight: 700;
    cursor: pointer;
    outline: none;
    }
    input[type="submit"]:hover{
    border-color: #2691d9;
    transition: .5s;
    }
    .signup_link{
    margin: 30px 0;
    text-align: center;
    font-size: 16px;
    color: #666666;
    }
    .signup_link a{
    color: #2691d9;
    text-decoration: none;
    }
    .signup_link a:hover{
    text-decoration: underline;
    }

    .v-messages__message{
      color: #b1002b;
    }


</style>