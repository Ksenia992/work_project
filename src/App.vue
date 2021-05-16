<template>
  <v-app>
    <component :is="layout">
    
      <router-view />
    </component>
 
  </v-app>
</template>

<script>
import SignLayout from "@/Layouts/SignLayout.vue";
import MainLayout from "@/Layouts/MainLayout.vue";


export default {
  computed: {
    layout () {
      return (this.$route.meta.layout || 'Sign') + '-layout'
    }
  },
  components:{SignLayout, MainLayout}
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


