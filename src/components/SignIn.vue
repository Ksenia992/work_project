<template>
  <v-card
    class="d-flex align-center justify-center flex-column px-7"
    flat
    color="transparent"
    height="100%"
    width="100%"
  >
    <v-row>
      <v-col
        cols="12"
        xs="8"
        sm="8"
        md="10"
        lg="12"
        class="d-flex justify-center align-start pa-15"
      >
        <v-img src="@/assets/Logo.png" />
        <span class="pa-3 font-weight-bold">Rylex</span>
      </v-col>
    </v-row>

    <v-row class="pa-0">
      <v-col cols="12" justify="center" align="center">
        <h1 class="teal--text display-3 text-sm-h6 text-lg-h2 font-weight-bold">
          Sign in to Rulex
        </h1>

        <v-btn icon class="pa-10" fab>
          <v-icon>fab fa-facebook-f</v-icon>
        </v-btn>
        <v-btn icon fab>
          <v-icon>fab fa-google-plus-g</v-icon>
        </v-btn>
        <p class="font-weight-thin">or use your email account</p>
        <v-row>
          <v-col cols="12" justify="center" align="center">
            <v-form @submit.prevent="submit">
              <v-text-field
                v-model.trim="username"
                label="Username"
                required
                prepend-inner-icon="far fa-user"
                @input="$v.username.$touch()"
                @blur="$v.username.$touch()"
              ></v-text-field>
              <v-text-field
                v-model.trim="password"
                :error-messages="passwordErrors"
                prepend-inner-icon="fas fa-lock"
                :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPass ? 'text' : 'password'"
                @click:append="showPass = !showPass"
                counter
                minLength="8"
                label="Password"
                required
                @input="$v.password.$touch()"
                @blur="$v.password.$touch()"
              ></v-text-field>
              <p class="font-weight-bold text-decoration-underline pointer">
                Forgot your password?
              </p>

              <ButtonWithout
                :loading="isPageLoading"
                :disabled="this.$v.$invalid"
                type="submit"
                :btn_text="btn_text"
                @click="submit"
              ></ButtonWithout>
            </v-form>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>



<script lang="ts">
import Vue from "vue";
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";
import ButtonWithout from "@/components/Buttons/ButtonWithoutBorder.vue";
import { mapState } from "vuex";
import Component from "vue-class-component";

@Component({
  mixins: [validationMixin],
  validations: {
    password: { required, minLength: minLength(8) },
    username: { required },
  },
  components: { ButtonWithout },
  computed: {
    ...mapState("auth", ["isLogged", "isPageLoading"]),
    passwordErrors() {
      const errors: string[] = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push("Password must be at least 8 symbols");
      !this.$v.password.required && errors.push("Password is required.");
      return errors;
    },
  },
})
export default class SignIn extends Vue {
  isLogged!: boolean;

  username: string = "";
  password: string = "";
  showPass: boolean = false;
  btn_text: string = "Sign In";

  async submit() {
    this.$v.$touch();
    const formData = {
      username: this.username,
      password: this.password,
    };
    await this.$store.dispatch("auth/SIGN_IN", formData);

    console.log(this.isLogged);
    if (this.isLogged) {
      this.$router.push("/tenants");
    }
  }
}
</script>

<style lang="scss" scoped>
.pointer:hover {
  cursor: pointer;
}
</style>