<template>
    <footer id="footer" class="fixed w-full bottom-0  py-4">
       <div id="footer-icon" class="bg-indigo-600 w-14 h-14 rounded-full mx-auto mb-4 " >
        <span class="material-icons pl-4 h-14 py-auto pt-4 text-white ">settings</span>
       </div>
        <div class="container mx-auto px-8 h-full">
            <ul class="flex justify-between h-full items-center">
                <li v-for="navItem in navItems" :key="navItem.icon">
                    <router-link  :to="{name:navItem.name, params:{}}">
                        <span class="material-icons">{{navItem.icon}}</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script>
import {reactive} from "vue";
export default({
    setup() {
        const navItems = reactive([
            {
                icon:"home",
                text:"Home",
                name:"Home"
            },
            {
                icon:"description",
                text:"Home",
                name:"Home"
            },
            {
                icon:"email",
                text:"Home",
                name:"Home"
            },
            {
                icon:"settings",
                text:"Home",
                name:"Home"
            }
        ])
        return{
            navItems
        }
    },
})
</script>

<style scoped lang="css">
/* 
    footer#footer{
        background: red !important;
    } */
    footer#footer::before{
        @apply absolute ;
        /* @apply bg-red-500 */
        /* position: absolute;
        background-color: aqua !important;
         */
         @apply bg-red-600;
        width: 60px;
        height: 30px;
        border-bottom-left-radius: 60px;
        border-bottom-right-radius: 60px;
        top: 0;
        left:50%;
        transform: translateX(-50%);
    }

    footer#footer::after{
        @apply absolute -top-6 flex items-center justify-center text-white;
      
        @apply w-12 h-12 ; 
        transform: translateX(-50%);
   }
</style>
