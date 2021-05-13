<template>
  <v-img
    lazy-src="@/assets/BackgroundTwo.png"
    height="100vh"
    max-width="100%"
    src="@/assets/BackgroundTwo.png"
  >
    <v-card
      class="d-flex align-center justify-center flex-column"
      flat
      color="transparent"
      height="100%"
      width="100%"
    >
      <v-row class="white--text justify-center">
        <v-col cols="12" class="d-flex align-center flex-column justify-center">
          <h1 class="display-3 text-sm-h6 text-lg-h2 font-weight-bold">
            Hello, friend
          </h1>
          <p class="pt-10 pb-0 mb-0">Enter your personal details</p>
          <p class="py-0 mt-0">and start journey with us</p>

          <v-btn
            class="pa-5 mt-10 font-weight-light pa-8"
            outlined
            color="white"
            elevation="2"
            rounded
            x-large
            >Sign Up
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-img>
</template>

<script>
export default {};
</script>

<style lang="scss">
.v-btn__content {
  padding: 30px !important;
}
</style>