<template>
  <v-btn
    class="py-5 px-16 mt-10 font-weight-light"
    outlined
    color="white"
    elevation="2"
    rounded
    x-large
    @click="open"
    >Sign In
  </v-btn>
</template>

<script>
export default {
  props: ["clickHandler"],
  methods: {
    open() {
      this.clickHandler();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>