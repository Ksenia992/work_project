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
            <v-form v-model="valid" @submit.prevent="submitHandler">
              <v-text-field
                v-model.trim="email"
                :class="{
                  invalid:
                    ($v.email.$dirty && !$v.email.required) ||
                    ($v.email.$dirty && !$v.email.email),
                }"
                label="Email"
                prepend-inner-icon="far fa-envelope"
                @blur="checkValue"
                required
              ></v-text-field>

              <v-text-field
                v-model.trim="password"
                :class="{
                  invalid:
                    ($v.password.$dirty && !$v.password.required) ||
                    ($v.password.$dirty && !$v.password.minLength),
                }"
                label="Password"
                required
                prepend-inner-icon="fas fa-lock"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                @click:append="show1 = !show1"
                @blur="checkValue"
              ></v-text-field>
              <p
                class="invalid red--text text-overline"
                color="red"
                v-if="$v.email.$dirty && !$v.email.required"
              >
                Email required
              </p>
              <p
                class="invalid red--text text-overline"
                v-else-if="$v.email.$dirty && !$v.email.email"
              >
                Incorrect format of email
              </p>
              <p
                class="invalid red--text text-overline"
                color="red"
                v-if="$v.password.$dirty && !$v.password.required"
              >
                Type your password
              </p>
              <p
                class="invalid red--text text-overline"
                color="red"
                v-else-if="$v.password.$dirty && !$v.password.minLength"
              >
                Password should be at least 8 symbols.Now it is
                {{ password.length }}
              </p>
              <p class="font-weight-bold text-decoration-underline pointer">
                Forgot your password?
              </p>

              <v-btn
                class="pa-5 mt-10 font-weight-light white--text mb-5"
                color="#1AAA8D"
                elevation="2"
                rounded
                ref="btn"
                type="submit"
                x-large
                :disabled="this.$v.$invalid"
                >Sign In
              </v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";
export default {
  data: () => ({
    email: "",
    password: "",
    show1: false,
    show2: true,
    show3: false,
    show4: false,
    rules: {
      required: (value) => !!value || "Required.",
      emailMatch: () => `The email and password you entered don't match`,
    },
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(8) },
  },
  methods: {
    checkValue() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      this.$refs.btn.disabled = false;
    },
    // submitHandler() {
    //   if (this.$v.$invalid) {
    //     this.$v.$touch();
    //     return;
    //   }

    //   const formData = {
    //     email: this.email,
    //     password: this.password,
    //   };
    //   console.log(formData);
    //   this.$router.push("/");
    // },
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password,
      };
      const response = await fetch("https://api-shark.herokuapp.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.pointer:hover {
  cursor: pointer;
}
</style>