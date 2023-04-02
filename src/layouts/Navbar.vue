<template>
    <div class="navbar">
      <div class="logo-right">
        <v-list-item 
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          title="John"
          nav
          >
          <template v-slot:append>
            <v-menu
              open-on-hover
            >
            <template v-slot:activator="{ props }" >
              <span
                v-bind="props"
                color="#ccc"
                class="material-icons icon-btn"
              > expand_more
             </span>
            </template>
  
              <v-list>
                <v-list-item
                >
                  <v-list-item-title >
                    <p>Profile</p>
                  </v-list-item-title>
  
                  <v-list-item-title @click="logout" style="padding-top:16px">
                    <p>Logout</p>
                  </v-list-item-title>
  
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
        </v-list-item>
  
      </div>
    </div>
  </template>
  
  <script>
  //import Sidebar from './SidebarComponent.vue'
  import * as actions from "@/api/auth/authAction";

    export default {
      components: {
      //Sidebar
      },
      data: () => ({
        drawer: false,
        group: null,
        items: [
          {
            title: 'Profile',
            value: 'Profile',
          },
          {
            title: 'Logout',
            value: 'Logout',
          },
        ],
      }),
  
      watch: {
        group () {
          this.drawer = false
        },
      },
      methods: {
        logout(){
          // localStorage.removeItem('token');
          // localStorage.removeItem('is_expanded');
          actions.logout();
          this.$router.push('/login')
        }
      }
    }
  </script>
  <style scoped>
    .navbar{
      height: 64px;
      background: #CCC;
    }
    .logo-right{
      float: right;
    }
  </style>