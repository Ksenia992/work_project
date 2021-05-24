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

        <v-btn icon class="pa-10">
          <v-icon>fab fa-facebook-f</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>fab fa-google-plus-g</v-icon>
        </v-btn>
        <p class="font-weight-thin">or use your email account</p>
        <v-row>
          <v-col cols="12" justify="center" align="center">
            <v-form @submit.prevent="submit">
              <v-text-field
                v-model.trim="email"
                :error-messages="emailErrors"
                label="E-mail"
                required
                prepend-inner-icon="far fa-envelope"
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
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
                :disabled="this.$v.$invalid"
                :type="submit"
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

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";
import ButtonWithout from "@/components/Buttons/ButtonWithoutBorder.vue";
import { mapState } from "vuex";

export default {
  mixins: [validationMixin],

  validations: {
    password: { required, minLength: minLength(8) },
    email: { required, email },
  },
  data: () => ({
    email: "",

    password: "",
    showPass: false,

    btn_text: "Sign In",
  }),
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Incorrect format of e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push("Password must be at least 8 symbols");
      !this.$v.password.required && errors.push("Password is required.");
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
      const formData = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("SIGN_IN", formData);
      // this.$router.push("/");
    },

    // submitHandler() {
    //   this.$v.$touch();
    //   const formData = {
    //     email: this.email,
    //     password: this.password,
    //   };
    //   console.log(formData);
    //   this.$router.push("/");
    // },
    // async submitHandler() {
    //   this.$v.$touch();
    //   const formData = {
    //     email: this.email,
    //     password: this.password,
    //   };
    //   const response = await fetch("https://api-shark.herokuapp.com/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });
    //   const data = await response.json();
    //   this.$router.push("/");
    // },
  },

  // async submitHandler() {
  //   if (this.$v.$invalid) {
  //     this.$v.$touch();
  //     return;
  //   }
  //   const formData = {
  //     email: this.email,
  //     password: this.password,
  //   };
  //   const response = await fetch("https://api-shark.herokuapp.com/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   });
  //   const data = await response.json();
  //   this.$router.push("/");
  // },
  components: { ButtonWithout },
};
</script>

<style lang="scss" scoped>
.pointer:hover {
  cursor: pointer;
}
</style>