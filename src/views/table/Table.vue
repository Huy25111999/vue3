<template>
    <div class="wrapper px-8 mt-5">
      <v-card class="p-4 mb-5 pb-3">
          <v-card-title>Table</v-card-title>
          <div class="px-8">
            <label class="pref-button"><input type="checkbox" v-model="selectAll"><span>Select All</span></label>
 
          
            <label :for="select.id" v-for="select in selectsArray" v-bind:key="select.id"><input :value="select.id" v-model="selected" :id="select.id" :sector="select.id" :class="select.class" :default="select.default" type="checkbox">{{ select.name }}</label><br />
            
            <span>Selected Ids: {{ selected }}</span>
          </div>
      </v-card>
    </div>
  
  </template>
  
  <script src="./table.ts" lang="ts"></script>
  