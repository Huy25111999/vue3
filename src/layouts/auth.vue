<template>
    <!-- <h5>Auth-layout</h5> -->
    <div class="center">
        <navigation-brand />
        <slot />
    </div>

</template>
<script>
import NavigationBrand from '@/components/NavigationBrand.vue';
    export default{
        name:"layout-default",
        components:{
            NavigationBrand
        }
    }
</script>
<style>
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
</style>