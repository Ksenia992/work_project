<template>
  <transition name="anim">
    <router-view></router-view>
  </transition>
  <!-- <router-view /> -->
</template>

<script>
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import SignInTwo from "../views/SignInTwo.vue";
import SignUpTwo from "../views/SignUpTwo";
export default {
  components: { SignIn, SignUp, SignInTwo, SignUpTwo },
};
</script>

<style lang="scss" scoped>
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

// @keyframes anim-in {
//  from {
//     transform: translateX(0%);
//   }

//   to {
//     transform: translateX(100%);
//   }
// }
</style>