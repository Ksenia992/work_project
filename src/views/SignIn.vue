<template>
  
  <v-img
    lazy-src="@/assets/Background.png"
    height="100vh"
    max-width="100%"
    src="@/assets/Background.png"
  >
    <v-card
      class="d-flex align-center justify-center flex-column"
      flat
      color="transparent"
       height="100%"
      width="100%"
    >
      <v-row>
        <v-col
          cols="12"
          xs="8"
          sm="8"
          md="10"
          lg="12"
          class="d-flex justify-center align-start pa-15"
        >
          <v-img src="@/assets/Logo.png" />
          <span class="white--text pa-3 font-weight-bold">Rylex</span>
        </v-col>
      </v-row>

      <v-row class="white--text justify-center">
        <v-col cols="12" class="d-flex align-center flex-column">
          <h1 class="text-sm-h6 text-lg-h2 text-xs-h6 pl-xs-4 font-weight-bold">
            Welcome Back
          </h1>
          <p class="pt-10 pb-0 mb-0">To keep connected with us please</p>
          <p class="py-0 mt-0">login with your personal info</p>
          <router-link
          to="/sign_in"
          >
          <v-btn
            class="pa-5 mt-10 font-weight-light"
            outlined
            color="white"
            elevation="2"
            rounded
            x-large
            >Sign In
          </v-btn>
          </router-link>
        </v-col>
      </v-row>
    </v-card>
  </v-img>

  
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.v-btn {
  border: 2px solid white;
}

</style>