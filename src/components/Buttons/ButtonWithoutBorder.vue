<template>
  <v-btn
    class="py-5 px-16 mt-10 font-weight-light white--text mb-5"
    color="#1AAA8D"
    elevation="2"
    rounded
    ref="btn"
    type="submit"
    x-large
    :disabled="disabled"
    :loading="loading"
    >{{ btn_text }}
  </v-btn>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({})
export default class ButtonWithoutBorder extends Vue {
  @Prop() open!: () => void;
  @Prop() btn_text!: string;
  @Prop() disabled!: boolean;
  @Prop() loading!: boolean;

  // props: {
  //   open: {
  //     type: Function,
  //   },
  //   btn_text: {
  //     type: String,
  //     required: true,
  //   },
  //   disabled: {},
  //   loading: {},
  // };
}
</script>

<style lang="scss" scoped>
</style>

// :disabled="this.$v.$invalid"