<template>
  <v-container fill-height fluid>
    <v-row>
      <v-col cols="12" justify="center" align="center">
        <h1 class="teal--text display-3 font-weight-bold">Create Account</h1>

        <v-btn icon class="pa-10">
          <v-icon>fab fa-facebook-f</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>fab fa-google-plus-g</v-icon>
        </v-btn>
        <p class="font-weight-thin">or use your email for registration</p>
        <v-col cols="6" justify="center" align="center">
          <v-form v-model="valid">
            <v-text-field
              v-model="firstname"
              label="Name"
              prepend-inner-icon="far fa-user"
              required
            ></v-text-field>

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
              @click:append="hidePass('passwordFieldType')"
              required
            ></v-text-field>

            <v-text-field
              v-model="password_repeat"
              label="Repeat password"
              prepend-inner-icon="fas fa-lock"
              append-icon="far fa-eye-slash"
              :type="passwordFieldType_two"
              @click:append="hidePass('passwordFieldType_two')"
              required
            ></v-text-field>
            <v-checkbox v-model="checkbox">
              <template v-slot:label>
                <div>
                  I agree to the
                  <v-tooltip bottom>
                    <template v-slot:activator="{}">
                      <span class="font-weight-bold"> Terms </span>
                    </template>
                    Opens in new window
                  </v-tooltip>
                  of User
                </div>
              </template>
            </v-checkbox>
            <v-btn
              class="pa-5 mt-10 font-weight-light white--text"
              color="#1AAA8D"
              elevation="2"
              rounded
              type="submit"
              x-large
              >Sign Up
            </v-btn>
          </v-form>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    password: "",
    password_repeat: "",
    passwordFieldType_two: "password",
    passwordFieldType: "password",
    checkbox: false,
  }),
  methods: {
    hidePass(name) {
      this[name] = this[name] === "password" ? "text" : "password";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>