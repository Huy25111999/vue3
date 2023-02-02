<template>
  <v-app>
    <!-- <v-main> -->
      <!-- <component :is="layout"> -->
        <router-view />
      <!-- </component> -->
    <!-- </v-main> -->
  </v-app>
</template>

<script lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import {PUBLIC_LAYOUT} from "@/constants";

import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  setup(){
    const route = useRoute();
    console.log(route);

    return {
       layout:computed(() =>(route.meta.layout || PUBLIC_LAYOUT) + "-layout" )
    }
  }
})
</script>
