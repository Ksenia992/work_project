<template>
  <v-btn
    class="py-4 px-6 white--text"
    color="#1AAA8D"
    elevation="2"
    rounded
    ref="btn"
    type="submit"
    middle
    @click="submit"
    :disabled="disabled"
    >Save
  </v-btn>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({})
export default class SaveBtn extends Vue {
  @Prop() submit!: () => void;
  @Prop() disabled!: boolean;

  // props: ["submit", "disabled"],
}
</script>

<style lang="scss" scoped>
</style>