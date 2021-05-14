<template>
  <v-row>
    <v-col
      cols="2"
      class="for_padding"
      position="absolute"
      style="background: #1ba890"
    >
      <v-col cols="4" class="d-flex align-center">
        <v-img src="@/assets/Logo.png" />
        <span class="white--text text-h4 pa-3 font-weight-bold">Rylex</span>
      </v-col>

      <v-col class="d-flex flex-column align-center white--text pt-16">
        <v-col lass="d-flex align-center">
          <v-btn icon color="white"><v-icon>mdi-home</v-icon>Tenants</v-btn>
          <!-- <p class="font-weight-bold pt-4">Tenants</p> -->
        </v-col>

        <v-text-field
          hide-details
          label="Search"
          prepend-icon="mdi-magnify"
        ></v-text-field>
      </v-col>
    </v-col>
    <v-col>
      <v-app-bar
        relative
        color="transparent"
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
      >
        <divider />
        <v-toolbar-title class="font-weight-thin text-caption"
          >Tenants
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon color="#30B78D">
          <v-icon>mdi-earth</v-icon>
        </v-btn>

        <v-btn icon color="#30B78D">
          <v-icon>mdi-information-outline</v-icon>
        </v-btn>

        <v-btn icon color="#30B78D">
          <v-icon>mdi-account-circle-outline</v-icon>
        </v-btn>
      </v-app-bar>
      <v-content class="flex-column">
        <Try />
      </v-content>
    </v-col>
  </v-row>
</template>

<script>
import MainTable from "../components/MainTable.vue";
import Try from "../components/Try.vue";
export default {
  components: { MainTable, Try },
};
</script>

<style lang="scss" scoped>
.for_padding {
  padding-bottom: 1024px;
}
</style>