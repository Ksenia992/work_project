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
          <v-col class="d-flex" v-if="logoOpen">
            <v-img src="@/assets/Logo.png" />
            <span class="white--text pa-3 font-weight-bold">Rylex</span>
          </v-col>
        </v-col>
      </v-row>

      <v-row class="white--text justify-center">
        <v-col cols="12" class="d-flex align-center flex-column">
          <h1 class="text-sm-h6 text-lg-h2 text-xs-h6 pl-xs-4 font-weight-bold">
            {{ title }}
          </h1>
          <p class="pt-10 pb-0 mb-0">{{ text }}</p>
          <p class="py-0 mt-0">{{ text_next }}</p>
          <ButtonWith  :clickHandler="changeTitle" :btn_text="logoOpen ? 'Sign In' : 'Sign Up' " />
          <!-- <ButtonWith  
          :clickHandler="changeTitle">{{logoOpen ? 'Sign in' : 'Sign up'}} </ButtonWith> -->
        </v-col>
      </v-row>
    </v-card>
  </v-img>
</template>

<script>
import ButtonWith from "./Buttons/ButtonWithBorder.vue";
export default {
  props: ["openComp"],
  data: () => ({
    title: "Welcome Back",
    text: "To keep connected with us please",
    text_next: "login with your personal info",
    logoOpen: true,
  }),
  methods: {
    changeTitle() {
      
      this.title = "Hello, friend!";
      this.text = "Enter your personal details";
      this.text_next = "and start journey with us";
      this.logoOpen = false;
      
      
      this.openComp();
     
     
   
    },
  },
  components: { ButtonWith },
};
</script>

<style lang="scss" scoped>

</style>