<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';

import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  setup(){
    const route = useRoute();
    console.log(route);

    return {
    }
  }
})
</script>
