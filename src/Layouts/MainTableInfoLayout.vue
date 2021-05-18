<template>
  <v-card class="overflow-hidden" height="100%">
    <v-app-bar color="#1AAA8D">
      <v-app-bar-nav-icon
        color="white"
        @click="drawer = true"
      ></v-app-bar-nav-icon>

      <!-- <v-toolbar-title>Title</v-toolbar-title> -->
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
              v-for="(step, idx) in steps"
              :key="idx"
              :class="{
                active: idx === activeIndex,
                done: idx < activeIndex,
              }"
              @click="setActive(idx), (drawer = false)"
              class="d-flex"
            >
              <router-link :to="{ path: step.path }">
                <v-list-item-icon>
                  <v-icon color="white">{{ step.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title class="white--text">{{
                    step.title
                  }}</v-list-item-title>
                </v-list-item-content>
              </router-link>
            </v-list-item>

            <!-- <v-list-item link>
                <v-list-item-icon>
                  <v-icon color="white">mdi-account-group-outline</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title class="white--text"
                    >Groups</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
        

            
              <v-list-item link>
                <v-list-item-icon>
                  <v-icon color="white">mdi-phone</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title class="white--text"
                    >Phone numbers</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
         

              <v-list-item link>
                <v-list-item-icon>
                  <v-icon color="white">mdi-account-circle</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title class="white--text"
                    >Admins</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
         

              <v-list-item link>
                <v-list-item-icon>
                  <v-icon color="white">mdi-account-group</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title class="white--text"
                    >Users</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
      

              <v-list-item link>
                <v-list-item-icon>
                  <v-icon color="white">mdi-magnify</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title class="white--text"
                    >Search</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item> -->
          </v-list>
        </v-col>
      </v-row>
    </v-navigation-drawer>

    <v-app-bar
      relative
      color="transparent"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-col cols="10" class="d-flex justify-center">
        <v-toolbar-title class="font-weight-thin text-h6"
          >Tenants

          <v-icon>mdi-arrow-right</v-icon>
          CallConnect

          <v-icon>mdi-arrow-right</v-icon>
          {{ activeStep.title }}
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
    <v-content>
      <router-view />
    </v-content>
  </v-card>
</template>

<script>
import Check from "../views/Check.vue";

export default {
  data: () => ({
    drawer: false,
    group: null,
    activeIndex: 0,
    isActive: true,
    steps: [
      { title: "Groups", icon: "mdi-account-group-outline", path: "/groups" },
      { title: "Phone numbers", icon: "mdi-phone", path: "" },
      { title: "Admins", icon: "mdi-account-circle", path: "/admins" },
      { title: "Users", icon: "mdi-account-group", path: "" },
      { title: "Search", icon: "mdi-magnify", path: "" },
    ],
  }),
  methods: {
    prev() {
      if (this.activeIndex !== 0) {
        this.activeIndex--;
      }
      // console.log(this.activeIndex)
    },
    reset() {
      this.activeIndex = 0;
      this.isActive = true;
    },

    nextOfFinish() {
      // console.log(this.activeIndex)
      // console.log(this.steps.length - 1)
      if (this.activeIndex !== this.steps.length - 1) {
        this.activeIndex++;
      } else {
        this.isActive = false;
      }
    },
    setActive(idx) {
      this.activeIndex = idx;

      // console.log(this.activeIndex)
    },
  },
  computed: {
    activeStep() {
      return this.steps[this.activeIndex];
    },
    prevDisabled() {
      return this.activeIndex === 0;
    },
    isLastStep() {
      return this.activeIndex === this.steps.length - 1;
    },
  },
  components: { Check },
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