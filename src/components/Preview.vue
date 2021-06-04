<template>
  <v-img lazy-src="@/assets/Background.png" height="875px" max-width="100%">
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
          <ButtonWith :clickHandler="changeTitle" :btn_text="btn_text" />
        </v-col>
      </v-row>
    </v-card>
  </v-img>
</template>

<script lang='ts'>
import ButtonWith from "./Buttons/ButtonWithBorder.vue";
import Vue from "vue";
import { Prop } from "vue-property-decorator";
import Component from "vue-class-component";

@Component({
  components: { ButtonWith },
})
export default class Preview extends Vue {
  @Prop() openComp!: () => void;

  isSignIn: boolean = true;
  title: string = "Welcome Back!";
  text: string = "To keep connected with us please";
  text_next: string = "login with your personal info";
  btn_text: string = "Sign In";
  logoOpen: boolean = true;

  changeTitle() {
    this.title = this.isSignIn ? "Hello, friend!" : "Welcome Back!";
    this.text = this.isSignIn
      ? "Enter your personal details"
      : "To keep connected with us please";
    this.text_next = this.isSignIn
      ? "and start journey with us"
      : "login with your personal info";
    this.btn_text = this.isSignIn ? "Sign Up" : "Sign In";
    this.logoOpen = false;
    this.isSignIn = !this.isSignIn;
    this.openComp();
  }
}
</script>

<style lang="scss">
// v-img {
//   overflow: hidden !important;
// }
</style>








