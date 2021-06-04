<template>
  <v-btn
    class="py-4 px-16 mt-10 font-weight-light"
    outlined
    color="white"
    elevation="2"
    rounded
    x-large
    @click="open"
  >
    {{ btn_text }}
  </v-btn>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({})
export default class ButtonWithBorder extends Vue {
  @Prop() clickHandler!: () => void;
  @Prop() btn_text!: string;

  // props: {
  //   clickHandler: {
  //     type: Function,
  //   },
  //   btn_text: {
  //     type: String,
  //     required: true,
  //   },
  // },
  //  ["clickHandler", "btn_text"],

  open() {
    this.clickHandler();
  }
}
</script>

<style lang="scss" scoped>
.v-btn {
  border: 2px solid white;
}
</style>