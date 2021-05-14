<template>
  <v-container class="pa-0 ma-0">
    <v-row class="py-0 my-0">
      <v-col class="pa-0 ma-0" sm="5" cols="12"><SignIn /> </v-col>
      <v-col class="pa-0 ma-0" sm="7" cols="12">
        <SignUp />
      </v-col>
    </v-row>

    <v-row class="py-0 my-0">
      <v-col class="pa-0 ma-0" sm="7" cols="12"><SignInTwo /> </v-col>
      <v-col class="pa-0 ma-0" sm="5" cols="12">
        <SignUpTwo />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";
import SignInTwo from "../components/SignInTwo.vue";
import SignUpTwo from "../components/SignUpTwo";
export default {
  components: { SignIn, SignUp, SignInTwo, SignUpTwo },
};
</script>

<style lang="scss" scoped>
</style>