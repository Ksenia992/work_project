<template>
  <v-app>
    <v-container class="pa-0 ma-0">
      <Sign />
      <router-view />
    </v-container>
  </v-app>
</template>

<script>
import Sign from "./views/Sign.vue";
export default {
  components: { Sign },
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


