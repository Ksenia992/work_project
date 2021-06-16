<template>
  <div>
    <v-app-bar
      color="transparent"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
      class="offset-md-2"
    >
      <v-toolbar-title>
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
          <v-breadcrumbs-item class="mx-3 text-h6 teal--text font-italic">{{
            tenantName
          }}</v-breadcrumbs-item>
        </v-col>
      </v-toolbar-title>

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
    </v-app-bar>
    <v-main class="offset-md-2">
      <router-view />
    </v-main>
    <v-col cols="12" md="2" sm="4">
      <v-card
        style="background: #1ba890"
        class="card"
        width="300px"
        height="100vh"
      >
        <v-card-title>
          <v-col cols="6" class="d-flex align-center">
            <v-img src="@/assets/Logo.png" />
            <span
              class="
                white--text
                text-h4
                pa-3
                font-weight-bold
                text-body-2
                for
                xs
              "
              >Rylex</span
            >
          </v-col>
        </v-card-title>

        <v-card-text>
          <v-row>
            <v-col cols="12">
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
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
// .for_height {
//   height: calc(100vh-56px) !important;
// }
.card {
  position: absolute;
  top: 0;
  left: 0;
}
</style>