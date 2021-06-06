<template>
  <v-card class="overflow-hidden" height="100%">
    <v-app-bar color="#1AAA8D">
      <v-app-bar-nav-icon
        color="white"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-row>
        <v-col
          cols="12"
          class="for_padding"
          position="absolute"
          style="background: #1ba890"
        >
          <v-col cols="8" class="d-flex align-center">
            <v-img src="@/assets/Logo.png" />
            <span
              class="white--text text-h4 pa-3 font-weight-bold text-body-2 for xs"
              >Rylex</span
            >
          </v-col>
          <v-list dense nav>
            <v-list-item-icon link>
              <v-list-item-icon>
                <v-icon color="white">mdi-warehouse</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title class="white--text">
                  CallConnect
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item-icon>
            <v-divider></v-divider>
            <v-list-item
              link
              v-for="(item, idx) in items"
              :key="idx"
            
              @click="(drawer = false)"
              class="d-flex"
            >
              <router-link :to="{ path: item.path }">
                <v-list-item-icon>
                  <v-icon color="white">{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title class="white--text">{{
                    item.text
                  }}</v-list-item-title>
                </v-list-item-content>
              </router-link>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-navigation-drawer>

    <v-app-bar relative color="transparent" elevate-on-scroll>
      <v-col cols="10" class="d-flex justify-center">
        <v-toolbar-title class="font-weight-thin text-h6"
         

        

    
          <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
        </v-toolbar-title>
      </v-col>

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
    <v-main>
      <router-view />
    </v-main>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,

    items: [
      // {
      //   title: "Tenants",
      //   disabled: false,
      //   href: "breadcrumbs_dashboard",
      // },

      {
        text: "Groups",
        disabled: true,
        icon: "mdi-account-group-outline",
        path: "/groups",
        href: "/groups",
      },
      {
        text: "Phone numbers",
        disabled: true,
        icon: "mdi-phone",
        path: "",
        href: "breadcrumbs_link_2",
      },
      {
        text: "Admins",
        disabled: false,
        icon: "mdi-account-circle",
        path: "/admins",
        href: "/admins",
      },
      {
        text: "Users",
        disabled: true,
        icon: "mdi-account-group",
        path: "",
      },
      {
        text: "Search",

        disabled: true,
        icon: "mdi-magnify",
        path: "",
      },
    ],
  }),
};
</script>
<style lang="scss">
.v-btn {
  border: none;
}
.for_padding {
  padding-bottom: 1024px;
}
.v-navigation-drawer__content {
  overflow: hidden !important;
}

a {
  display: flex;
}
</style>