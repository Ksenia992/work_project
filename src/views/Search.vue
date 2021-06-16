<template>
  <v-row>
    <v-col cols="12" class="ma-8">
      <v-app-bar color="transparent" flat>
        <!-- <divider />
     <v-divider dark></v-divider> -->

        <v-toolbar-title>Search</v-toolbar-title>

        <template v-slot:extension>
          <v-tabs class="ml-n15" align-with-title>
            <v-tab @click="users">Users</v-tab>
            <v-tab @click="groups">Groups</v-tab>
            <v-tab>Phone numbers</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>

      <Groups v-if="showGroups" />
      <Users v-if="showUsers" />
    </v-col>
  </v-row>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import Search_field from "./Search_field_btn.vue";
import Groups from "./Groups.vue";
import Users from "@/components/Users.vue";
@Component({
  components: { Search_field, Groups, Users },
})
export default class Search extends Vue {
  showGroups: boolean = false;
  showUsers: boolean = false;

  groups() {
    this.showGroups = true;
    this.showUsers = false;
  }
  users() {
    this.showUsers = true;
    this.showGroups = false;
  }
}
</script>

<style lang="scss">
// .v-application--is-ltr
//   .v-list-group--no-action
//   > .v-list-group__items
//   > .v-list-item {
//   padding-left: 0;
// }
</style>