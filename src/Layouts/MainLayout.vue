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
          <v-row class="d-flex justify-center">
            <v-col cols="10" class="d-flex justify-center">
              <v-toolbar-title class="font-weight-thin text-h6"
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
            </v-col>
          </v-row>
        </v-app-bar>

        <v-main>
          <router-view />
        </v-main>
      </v-col>
    </v-row>
  </v-row>
</template>

<script lang='ts'>
import MainTable from "../views/MainTable.vue";
import Search from "../views/Search.vue";
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: { MainTable, Search },
})
export default class MainLayout extends Vue {
  drawer: boolean = true;
  group: any = null;
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