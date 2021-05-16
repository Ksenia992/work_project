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
      <v-navigation-drawer color="transparent" permanent floating>
        <v-list dense nav>
            <router-link to="/">
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
      </v-navigation-drawer>
    </v-col>
    <v-col>
      <v-app-bar
        relative
        color="transparent"
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
      >
        <divider />
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
      </v-app-bar>
      <v-content>
      
        <router-view />
      </v-content>
    </v-col>
  </v-row>
</template>

<script>
import MainTable from "../views/MainTable.vue"
import Search from "../views/Search.vue"

export default {
  components: { MainTable, Search },
}
</script>

<style lang="scss" scoped>
.for_padding {
  padding-bottom: 1024px;
}
</style>
