<template>
  <ModalGlobal ref="global">
    <v-card height="200px" width="200px">
      <h1>Let's test it</h1>
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