<template>
  <v-row>
    <v-col cols="12" class="d-flex justify-center">
      <h1 class="purple--text">Choose the color of your app</h1>
      <v-color-picker
        dot-size="35"
        hide-canvas
        hide-sliders
        hide-inputs
        @update:color="getColor"
        mode="rgba"
        show-swatches
        swatches-max-height="200"
      ></v-color-picker>
      <span :style="{ color: color, padding: '20px' }">Example</span>
    </v-col>
    <v-col class="d-flex justify-center">
      <SaveBtn :submit="submit" />
    </v-col>
  </v-row>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import SaveBtn from "@/components/Buttons/SaveBtn.vue";

import { mapState } from "vuex";

@Component({
  components: { SaveBtn },
  computed: {
    ...mapState("settings", ["activeColor"]),
  },
})
export default class Settings extends Vue {
  color: string = "";

  getColor(value: any) {
    this.color = value.hex;
  }

  //   async submit() {
  //     await this.$store.dispatch("settings/CHANGE_COLOR", {
  //       color: this.color,
  //     });
  //   }
  submit() {
    this.$store.commit("settings/SET_COLOR", this.color);
  }
}
</script>

<style lang="scss" scoped>
// .check {
//   color: #1a237e;
// }
</style>