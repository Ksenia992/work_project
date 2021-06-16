<template>
  <v-row>
    <v-col
      cols="12"
      md="2"
      sm="4"
      class="for_padding"
      position="absolute"
      style="background: #1ba890"
    >
      <v-col cols="4" class="d-flex align-center">
        <v-img src="@/assets/Logo.png" />
        <span
          class="white--text text-h4 pa-3 font-weight-bold text-body-2 for xs"
          >Rylex</span
        >
      </v-col>
      <v-list style="background: transparent" dense nav>
        <router-link to="/tenants">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon color="white">mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="white--text">Tenants</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/search">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon color="white">mdi-magnify</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="white--text">Search</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-col>

    <v-row>
      <v-col>
        <v-app-bar
          relative
          color="transparent"
          elevate-on-scroll
          scroll-target="#scrolling-techniques-7"
        >
          <v-col cols="12" class="d-flex justify-center col-md-6">
            <v-toolbar-title class="font-weight-thin text-h6">
              <!-- <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs> -->
              <v-col class="d-flex">
                <v-breadcrumbs-item to="/admins" class="mx-3 text-h6"
                  >Admins
                </v-breadcrumbs-item>

                <v-breadcrumbs-item to="/search" class="mx-3 text-h6"
                  >Search
                </v-breadcrumbs-item>
                <v-breadcrumbs-item to="/tenants" class="mx-3 text-h6"
                  >Tenants
                </v-breadcrumbs-item>
                <v-breadcrumbs-item
                  class="mx-3 text-h6 teal--text font-italic"
                  >{{ tenantName }}</v-breadcrumbs-item
                >
              </v-col>
            </v-toolbar-title>
          </v-col>
          <v-row class="d-flex justify-center">
            <v-col cols="10" class="d-flex justify-center">
              <!-- <v-toolbar-title class="font-weight-thin text-h6"
                >Tenants
              </v-toolbar-title> -->

              <v-spacer></v-spacer>

              <v-btn icon color="#30B78D">
                <v-icon>mdi-earth</v-icon>
              </v-btn>

              <v-btn icon color="#30B78D">
                <v-icon>mdi-information-outline</v-icon>
              </v-btn>

              <v-btn @click="btnLogOut" icon color="#30B78D">
                <v-icon>mdi-account-circle-outline</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-btn small rounded v-if="outLog" @click="logOut" color="primary"
            >Logout</v-btn
          >
        </v-app-bar>
      </v-col>
    </v-row>
    <v-main>
      <router-view />
    </v-main>
  </v-row>
</template>

<script lang='ts'>
import MainTable from "../views/MainTable.vue";
import Search from "../views/Search.vue";

import Vue from "vue";
import Component from "vue-class-component";
import { mapState } from "vuex";

@Component({
  components: { MainTable, Search },
  computed: {
    ...mapState("auth", ["isLogged"]),
  },
})
export default class MainLayout extends Vue {
  drawer: boolean = true;
  group: any = null;
  isLogged!: boolean;
  outLog: boolean = false;

  async logOut() {
    await this.$store.dispatch("auth/LOG_OUT");
    console.log(this.isLogged);
    if (!this.isLogged) {
      this.$router.push("/login");
    }
  }
  btnLogOut() {
    this.outLog = !this.outLog;
  }
}
</script>
<style lang="scss">
.v-btn {
  border: none;
}
.for_padding {
  padding-bottom: 1024px;
}
</style>