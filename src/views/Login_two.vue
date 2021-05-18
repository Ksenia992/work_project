<template>
  <v-container class="pa-0 ma-0" fluid>
    <v-row class="py-0 my-0">
      <v-col class="pa-0 ma-0" sm="7" cols="12"><SignInTwo /> </v-col>
      <v-col class="pa-0 ma-0" sm="5" cols="12">
        <SignUpTwo />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SignInTwo from "@/views/SignInTwo.vue";
import SignUpTwo from "@/views/SignUpTwo.vue";
export default {
  components: { SignInTwo, SignUpTwo },
};
</script>