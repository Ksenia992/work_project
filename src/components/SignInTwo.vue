<template>
  <v-card
    class="d-flex align-center justify-center flex-column"
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

    <v-row>
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
        <v-col cols="12" justify="center" align="center">
          <v-form v-model="valid">
            <v-text-field
              v-model="lastname"
              label="Email"
              prepend-inner-icon="far fa-envelope"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              label="Password"
              prepend-inner-icon="fas fa-lock"
              append-icon="far fa-eye-slash"
              :type="passwordFieldType"
              @click:append="hidePass()"
              required
            ></v-text-field>
            <p class="font-weight-bold text-decoration-underline pointer">
              Forgot your password?
            </p>

            <v-btn
              class="pa-5 mt-10 font-weight-light white--text"
              color="#1AAA8D"
              elevation="2"
              rounded
              type="submit"
              x-large
              >Sign In
            </v-btn>
          </v-form>
        </v-col>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    password: "",
    passwordFieldType: "password",
  }),
  methods: {
    hidePass() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
  },
};
</script>

<style lang="scss" scoped>
.pointer:hover {
  cursor: pointer;
}
</style>