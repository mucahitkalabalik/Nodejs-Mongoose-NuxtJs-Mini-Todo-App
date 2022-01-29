<template>
  <v-app-bar max-height="58" class="d-flex justify-center">
      <nuxt-link to="/" ><v-btn  outlined class="mr-10 primary">Home Page</v-btn></nuxt-link>
        <nuxt-link to="/create" class="header-btn"><v-btn outlined class="mr-10 success header-btn">create Page</v-btn></nuxt-link>
  </v-app-bar>
</template>

<script>
export default {

}
</script>

<style>
.header-btn{
    text-decoration: none !important;
}
</style>