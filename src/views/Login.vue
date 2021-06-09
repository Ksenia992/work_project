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

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import Preview from "@/components/Preview.vue";
import SignUp from "@/components/SignUp.vue";
import SignIn from "@/components/SignIn.vue";
import { mapState } from "vuex";
import { Watch } from "vue-property-decorator";

@Component({
  components: { Preview, SignUp, SignIn },
  computed: {
    ...mapState("auth", ["isLogged"]),
  },
})
export default class Login extends Vue {
  isOpen: boolean = false;
  isLogged!: boolean;

  setIsOpen() {
    this.isOpen = !this.isOpen;
  }
  goHome(val: boolean) {
    if (val) this.$router.replace("/tenants");
  }

  @Watch("isLogged")
  watchIsLogged(newVal: boolean, oldVal: boolean) {
    this.goHome(newVal);
  }

  // watch: {
  //   isLogged(newVal, oldVal) {
  //     this.goHome(newVal);
  //   },
  // },
  created() {
    this.goHome(this.isLogged);
  }
}
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
     



