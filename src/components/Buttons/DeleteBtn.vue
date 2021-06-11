<template>
  <v-btn
    class="py-4 px-6 mx-6 white--text"
    color="#1AAA8D"
    elevation="2"
    rounded
    middle
    @click="deleteTen"
    >Delete
  </v-btn>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
@Component({})
export default class DeleteBtn extends Vue {
  @Prop() click!: () => void;

  deleteTen() {
    this.click();
  }
}
</script>

<style lang="scss" scoped>
</style>