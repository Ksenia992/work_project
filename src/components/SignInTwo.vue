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

            <!-- <v-text-field
              v-model="password"
              label="Password"
              prepend-inner-icon="fas fa-lock"
              append-icon="far fa-eye-slash"
              :type="passwordFieldType"
              @click:append="hidePass()"
              required
            ></v-text-field> -->

            <v-text-field
              v-model="password"
              label="Password"
              prepend-inner-icon="fas fa-lock"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              @click:append="show1 = !show1"
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
    show1: false,
    show2: true,
    show3: false,
    show4: false,
    rules: {
      required: (value) => !!value || "Required.",
      emailMatch: () => `The email and password you entered don't match`,
    },
  }),
};
</script>

<style lang="scss" scoped>
.pointer:hover {
  cursor: pointer;
}
</style>