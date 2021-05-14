<template>
  <v-app>
    <!-- <v-container class="pa-0 ma-0">
      <SignLayout />
      <router-view />
    </v-container> -->

    <v-container class="pa-0 ma-0">
      <MainLayout />

      <router-view />
    </v-container>
  </v-app>
</template>

<script>
import SignLayout from "./views/SignLayout.vue";
import MainLayout from "./views/MainLayout.vue";

export default {
  components: { SignLayout, MainLayout },
  data: () => ({
    //
  }),
};
</script>

<style>
* {
  user-select: none;
}
</style>


