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
  created() {
    this.$store.dispatch("auth/CHECK_TOKEN");
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
v-text-field,
v-text-field:before,
v-text-field:after {
  -webkit-user-select: initial;
  -khtml-user-select: initial;
  -moz-user-select: initial;
  -ms-user-select: initial;
  user-select: initial;
}
input,
input:before,
input:after {
  -webkit-user-select: initial;
  -khtml-user-select: initial;
  -moz-user-select: initial;
  -ms-user-select: initial;
  user-select: initial;
}
</style>


