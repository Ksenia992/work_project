<template>
  <v-app>
    <component :is="layout">
      <router-view />
    </component>
  </v-app>
</template>

<script>
import MainLayout from "@/Layouts/MainLayout.vue";
import MainTableInfoLayout from "@/Layouts/MainTableInfoLayout.vue";

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || "Login") + "-layout";
    },
  },
  components: { MainLayout, MainTableInfoLayout },
};
</script>

<style>
* {
  user-select: none;
}
.v-application a {
  text-decoration: none;
}
</style>


