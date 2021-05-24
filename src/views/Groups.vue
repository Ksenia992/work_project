<template>
  <v-row>
    <v-col cols="10" class="offset-md-2">
      <v-row class="mb-5 pl-5">
        <v-col cols="12" class="d-flex flex-column">
          <h1>My groups</h1>
        </v-col>
        <v-col cols="12" sm="8" class="d-flex flex-column">
          <v-text-field
            prepend-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
          <v-btn
            color="#1AAA8D"
            class="white--text pa-5"
            elevation="2"
            rounded
            :block="!$vuetify.breakpoint.smAndUp"
            >Add<v-icon right> mdi-plus-circle-outline </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="9" class="px-0">
          <v-card
            v-for="n in 3"
            :key="n"
            class="d-flex justify-space-between mb-6"
            flat
            tile
          >
            <v-card
              v-for="n in 3"
              :key="n"
              class="pa-2 d-flex align-center justify-space-between"
              width="25%"
              outlined
              tile
            >
              {{ n }}
              <v-icon color="#30B78D">mdi-account-group-outline</v-icon>
              <p class="my-0">Test delete</p>
              <v-btn outlined><v-icon>mdi-delete</v-icon></v-btn>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>