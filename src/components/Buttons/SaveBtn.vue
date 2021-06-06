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

<script>
export default {
  props: ["submit", "disabled"],
};
</script>

<style lang="scss" scoped>
</style>