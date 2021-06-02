<template>
  <v-container class="pa-0 ma-0 overflow-hidden" fluid fill-height>
    <transition name="anim">
      <v-row class="py-0 my-0">
        <v-col
          class="pa-0 ma-0"
          :class="{ 'order-last': isOpen }"
          sm="5"
          cols="12"
        >
          <Preview :openComp="setIsOpen" />
        </v-col>
        <v-col class="pa-0 ma-0" sm="7" cols="12">
          <SignIn v-if="isOpen" />
          <SignUp v-else />
        </v-col>
      </v-row>
    </transition>
  </v-container>
</template>

<script>
import Preview from "@/components/Preview.vue";
import SignUp from "@/components/SignUp.vue";
import SignIn from "@/components/SignIn.vue";
import { mapState } from "vuex";

export default {
  data: () => ({
    isOpen: false,
  }),
  // watch: {
  //    isLogged: function (val) {
  //     this.isLogged = val
  // },

  components: { Preview, SignUp, SignIn },
  methods: {
    setIsOpen() {
      this.isOpen = !this.isOpen;
    },
    goHome(val) {
      if (val) this.$router.replace("/");
    },
  },
  computed: {
    ...mapState("auth", ["isLogged"]),
    // isLoggedIn: function () {
    //   return this.$store.isLogged;
    // },
  },
  watch: {
    isLogged(newVal, oldVal) {
      this.goHome(newVal);
    },
  },
  created() {
    this.goHome(this.isLogged);
  },
};
</script>

<style scoped>
.anim-enter-active {
  animation: anim-in 0.7s;
}
.anim-leave-active {
  animation: anim-in 0.7s reverse;
}
@keyframes anim-in {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}
</style>
     



