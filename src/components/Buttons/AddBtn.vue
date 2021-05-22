<template>
    <v-btn
                    color="#1AAA8D"
                    class="white--text pa-5"
                    elevation="2"
                     :block="!$vuetify.breakpoint.smAndUp"
                    rounded
                    @click="show"
                    >Add <v-icon right> mdi-plus-circle-outline </v-icon></v-btn
                  >

</template>

<script>

  export default {
    methods: {
      show () {
        this.$emit("showModal")
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>