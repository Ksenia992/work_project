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
import DefaultLayout from "@/Layouts/DefaultLayout.vue";

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || "Default") + "-layout";
    },
  },
  components: { MainLayout, MainTableInfoLayout, DefaultLayout },
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


