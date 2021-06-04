<template>
  <ModalGlobal ref="global">
    <v-col>
      <p>Are you sure you want to delete admin: {{ admin_name }} ?</p>
      <p>You can't undo this action once deleted</p>
    </v-col>
  </ModalGlobal>
</template>

<script lang="ts">
import ModalGlobal from "./modalGlobal.vue";
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: { ModalGlobal },
})
export default class deleteAdmin extends Vue {
  admin_name: string = "cory_tenant";

  open() {
    this.$refs.global.open({ title: "" });
  }
}
</script>

<style lang="scss" scoped>
</style>