<template>
  <v-app>
    <app-header/>
    <v-container class="mt-15">
      <nuxt/>
    </v-container>
    
  </v-app>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
export default {
  components: { AppHeader },

}
</script>

<style>

</style>