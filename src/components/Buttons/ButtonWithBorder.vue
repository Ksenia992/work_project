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

<script>
export default {
  props: {
    clickHandler: {
      type: Function,
    },
    btn_text: {
      type: String,
      required: true,
    },
  },
  //  ["clickHandler", "btn_text"],
  methods: {
    open() {
      this.clickHandler();
    },
  },
};
</script>

<style lang="scss" scoped>
.v-btn {
  border: 2px solid white;
}
</style>