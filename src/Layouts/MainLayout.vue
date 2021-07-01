<template>
  <div class="d-flex">
    <v-col
      cols="12"
      sm="3"
      md="2"
      v-if="drawer || '$vuetify.breakpoint.smAndUp'"
      height="100vh"
      :style="{
        background: color || '#1AAA8D',
      }"
    >
      <v-col cols="6" class="d-flex align-center">
        <v-img src="@/assets/Logo.png" />
        <span
          class="white--text text-h4 pa-3 font-weight-bold text-body-2 for xs"
          >Rylex</span
        >
      </v-col>

      <v-col cols="12" class="d-flex">
        <v-list style="background: transparent" dense nav>
          <router-link to="/tenants">
            <v-list-item link>
              <v-list-item-icon>
                <v-icon color="white">mdi-home</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title class="white--text"
                  >Tenants</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </router-link>

          <router-link to="/search">
            <v-list-item link>
              <v-list-item-icon>
                <v-icon color="white">mdi-magnify</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title class="white--text"
                  >Search</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </router-link>
        </v-list>
      </v-col>
    </v-col>
    <v-col class="mt-12">
      <router-view />
    </v-col>

    <v-app-bar
      absolute
      color="transparent"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-col cols="10" class="d-flex justify-center">
        <v-col cols="4">
          <v-app-bar-nav-icon
            color="teal"
            v-if="$vuetify.breakpoint.smAndDown"
            @click="drawer = !drawer"
          ></v-app-bar-nav-icon>
        </v-col>
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
            <!-- <v-breadcrumbs-item class="mx-3 text-h6 teal--text font-italic">{{
              tenantName
            }}</v-breadcrumbs-item> -->
          </v-col>
        </v-toolbar-title>
      </v-col>

      <!-- <v-spacer></v-spacer> -->
      <v-row class="d-flex justify-center">
        <v-col cols="10" class="d-flex justify-center">
          <v-btn icon :color="color || '#1AAA8D'">
            <v-icon>mdi-earth</v-icon>
          </v-btn>

          <v-btn icon :color="color || '#1AAA8D'">
            <v-icon>mdi-information-outline</v-icon>
          </v-btn>

          <!-- <v-btn icon :color="color || '#1AAA8D'"  
      @click="btnLogOut"  open-on-hover
      top
      offset-y>
            <v-icon>mdi-account-circle-outline</v-icon>
          </v-btn> -->

          <v-menu open-on-hover offset-y content-class="elevation-0">
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon :color="color || '#1AAA8D'" v-bind="attrs" v-on="on">
                <v-icon>mdi-account-circle-outline</v-icon>
              </v-btn>
            </template>

            <v-btn small rounded @click="logOut" :color="color || '#1AAA8D'"
              >Logout</v-btn
            >
          </v-menu>
        </v-col>
      </v-row>
    </v-app-bar>
  </div>
</template>

<script lang='ts'>
import MainTable from "../views/MainTable.vue";
import Search from "../views/Search.vue";

import Vue from "vue";
import Component from "vue-class-component";
import { mapState } from "vuex";
import { Watch } from "vue-property-decorator";

@Component({
  components: { MainTable, Search },
  computed: {
    ...mapState("auth", ["isLogged"]),
    ...mapState("settings", ["activeColor"]),
  },
})
export default class MainLayout extends Vue {
  drawer: boolean = true;
  group: any = null;
  isLogged!: boolean;
  outLog: boolean = false;
  color: string | null = localStorage.getItem("color");

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

  @Watch("activeColor")
  changeCurrentColor(val: any) {
    this.color = val;
  }
}
</script>
<style lang="scss">
.v-btn {
  border: none;
}
// .for_padding {
//   padding-bottom: 1024px;
// }
</style>