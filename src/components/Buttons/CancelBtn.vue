<template>
  <v-btn
    class="py-4 px-6"
    outlined
    color="#949494"
    elevation="2"
    rounded
    middle
    @click="cancel"
  >
    Cancel
  </v-btn>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class CancelBtn extends Vue {
  cancel() {
    this.$emit("close");
  }
}
</script>

<style lang="scss" scoped>
.v-btn {
  border: 1px solid #949494 !important;
}
</style>