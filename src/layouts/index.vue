<template>
    <v-app>
      <!-- <v-main> -->
        <div id="app" class="bg-gray-200">
          <div class="app-content row">
            <div class="admin" >
              <Sidebar />
            </div>
            <div class="container">
              <Navbar />
              <v-main>
                <router-view></router-view>
              </v-main>
  
            </div>
          </div>
  
        </div>
      <!-- </v-main> -->
    </v-app>
  </template>
  
  <script>
  import Sidebar from './Sidebar.vue'
  import Navbar from './Navbar.vue'
  
  export default {
    name: 'Layout',
  
    components: {
      Sidebar,
      Navbar
  },
  
    data: () => ({
      //
    }),
  }
  </script>
  
  <style scoped>
    
    :root {
      --primary: #4ade80;
      --primary-alt: #22c55e;
      --grey: #64748b;
      --dark: #1e293b;
      --dark-alt: #334155;
      --light: #f1f5f9;
      --sidebar-width: 300px;
    }
  
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Fira sans', sans-serif;
    }
  
    body {
      background: var(--light);
    }
  
    button {
      cursor: pointer;
      appearance: none;
      border: none;
      outline: none;
      background: none;
    }
     /*Header*/
    .app-header {
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 1;
      background: #f1f1f1;
    }
  
    /*container*/
    .app-content {
      display: flex;
    }
  
    #app main {
      flex: 1 1 0;
    }
    .container {
      width: 100%;
  }
  
    @media (min-width: 1400px) {
      .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {
        max-width: 100%;
  
      }
      .container-body {
        border: 1px solid #ccc;
        border-radius: 10px;
      }
      .content{
        margin: 18px;
      }
    }
  
  </style>