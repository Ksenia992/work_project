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
    >{{ btn_text }}
  </v-btn>
</template>

<script>
export default {
  props: {
    open: {
      type: Function,
    },
    btn_text: {
      type: String,
      required: true,
    },
    disabled: {},
  },
};
</script>

<style lang="scss" scoped>
</style>

// :disabled="this.$v.$invalid"