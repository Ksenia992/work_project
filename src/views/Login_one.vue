<template>
  <v-container class="pa-0 ma-0" fluid>
    <v-row class="py-0 my-0">
      <v-col class="pa-0 ma-0" sm="5" cols="12"><SignIn /> </v-col>
      <v-col class="pa-0 ma-0" sm="7" cols="12">
        <SignUp />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
export default {
  components: { SignIn, SignUp },
};
</script>
