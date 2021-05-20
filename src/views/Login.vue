<template>
  <v-container class="pa-0 ma-0" fluid>
    <v-row class="py-0 my-0" v-if="!isOpen">
      <v-col class="pa-0 ma-0" sm="5" cols="12"
        ><Preview :openComp="setIsOpen"
      /></v-col>
      <v-col class="pa-0 ma-0" sm="7" cols="12"><SignUp /></v-col>
    </v-row>
    <v-row class="py-0 my-0" v-if="isOpen">
      <!-- <v-col class="pa-0 ma-0" sm="7" cols="12"><Preview /></v-col> -->
      <v-col class="pa-0 ma-0" sm="5" cols="12"><SignIn /></v-col>
    </v-row>
  </v-container>
</template>

<script>
import Preview from "@/components/Preview.vue";
import SignUp from "@/components/SignUp.vue";
import SignIn from "@/components/SignIn.vue";

export default {
  data: () => ({
    isOpen: false,
  }),
  components: { Preview, SignUp, SignIn },
  methods: {
    setIsOpen() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

     



