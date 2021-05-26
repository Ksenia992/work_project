<template>
  <ModalGlobal ref="global">
    <v-col>
      <p>Are you sure you want to delete admin: {{ admin_name }} ?</p>
      <p>You can't undo this action once deleted</p>
    </v-col>
  </ModalGlobal>
</template>

<script>
import ModalGlobal from "./modalGlobal.vue";
export default {
  data: () => ({
    admin_name: "cory_tenant",
  }),
  methods: {
    open() {
      this.$refs.global.open({ title: "" });
    },
  },
  components: { ModalGlobal },
};
</script>

<style lang="scss" scoped>
</style>