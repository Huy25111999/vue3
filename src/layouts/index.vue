<template>
    <v-app>
      <!-- <v-main> -->
        <div class="bg-gray-200">
          <div class="app-content row">
            <div class="admin" >
              <Sidebar />
            </div>
            <div class="wrapper-right">
              <div class="nav-bar">
                <Navbar />
              </div>
              <div class="wrapper-container">
                <v-main>
                  <router-view></router-view>
                </v-main>
              </div>
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
    name: 'layout',
  
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
    /* .app-header {
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 1;
      background: #f1f1f1;
    } */
  
    /*wrapper*/
    .app-content {
      display: flex;
      height: 100%;
      position: absolute;
      width: 100%;
    }
  
    .wrapper-right {
      width: 100%;
      background: #f5f3f3;
    }
    .wrapper-container{
      width: 100%;
      height: 100%;
      overflow: auto;
      padding-bottom: 100px;
    }
  
  
  </style>