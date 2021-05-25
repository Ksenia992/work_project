<template>
  <ModalGlobal ref="global">
    <v-card height="200px" width="200px">
      <h3>asdfasdasdas</h3>
      <h3>asdfasdasdas</h3>
      <h3>asdfasdasdas</h3>
    </v-card>
  </ModalGlobal>
</template>

<script>
import ModalGlobal from "./modalGlobal.vue";
export default {
  data: () => ({}),
  methods: {
    open() {
      this.$refs.global.open({ title: "new Admin" });
    },
  },
  components: { ModalGlobal },
};
</script>

<style lang="scss">
</style>