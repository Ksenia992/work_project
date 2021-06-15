<template>
  <v-row>
    <v-col cols="8" class="ma-8">
      <v-app-bar color="transparent" flat>
        <!-- <divider />
     <v-divider dark></v-divider> -->

        <v-toolbar-title>Search</v-toolbar-title>

        <template v-slot:extension>
          <v-tabs class="ml-n15" align-with-title>
            <v-tab>Users</v-tab>
            <v-tab>Groups</v-tab>
            <v-tab>Phone numbers</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
    </v-col>
  </v-row>
</template>

<script>
import Search_field from "./Search_field_btn.vue";
export default {
  data: () => ({
    items: [
      {
        items: [{ title: "First name" }],
        title: "User ID",
      },
    ],
  }),
  components: { Search_field },
};
</script>

<style lang="scss">
.v-application--is-ltr
  .v-list-group--no-action
  > .v-list-group__items
  > .v-list-item {
  padding-left: 0;
}
</style>