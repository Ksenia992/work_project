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
          Create account
        </h1>
        <v-col class="d-flex justify-center">
          <v-btn icon class="pa-8" fab>
            <v-icon>fab fa-facebook-f</v-icon>
          </v-btn>
          <v-btn icon class="pa-8" fab>
            <v-icon>fab fa-google-plus-g </v-icon>
          </v-btn>
        </v-col>

        <p class="font-weight-thin">or use your email for registration</p>
        <v-row>
          <v-col cols="12" justify="center" align="center">
            <v-form @submit.prevent="submit">
              <div class="form-group">
                <v-text-field
                  v-model.trim="username"
                  :error-messages="nameErrors"
                  label="Name"
                  :counter="20"
                  minLength="3"
                  maxLength="20"
                  prepend-inner-icon="far fa-user"
                  @input="$v.username.$touch()"
                  @blur="$v.username.$touch()"
                ></v-text-field>
                <v-text-field
                  v-model.trim="email"
                  :error-messages="emailErrors"
                  label="E-mail"
                  prepend-inner-icon="far fa-envelope"
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                ></v-text-field>
                <v-text-field
                  class="form-control"
                  label="Password"
                  value=""
                  :error-messages="passwordErrors"
                  prepend-inner-icon="fas fa-lock"
                  :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPass ? 'text' : 'password'"
                  @click:append="showPass = !showPass"
                  v-model.trim="password"
                  @input="$v.password.$touch()"
                  @blur="$v.password.$touch()"
                  autocomplete="off"
                ></v-text-field>
              </div>
              <div class="form-group">
                <v-text-field
                  prepend-inner-icon="fas fa-lock"
                  :append-icon="showPass2 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPass2 ? 'text' : 'password'"
                  @click:append="showPass2 = !showPass2"
                  class="form-control"
                  :error-messages="repeatPasswordErrors"
                  label="Repeat password"
                  value=""
                  v-model.trim="password_repeat"
                  @input="$v.password_repeat.$touch()"
                  @blur="$v.password_repeat.$touch()"
                  autocomplete="off"
                ></v-text-field>
              </div>

              <v-checkbox
                v-model="checkbox"
                :error-messages="checkboxErrors"
                label="I agree to the Terms of User"
                required
                @change="$v.checkbox.$touch()"
                @blur="$v.checkbox.$touch()"
              ></v-checkbox>

              <ButtonWithout
                :loading="isPageLoading"
                :type="submit"
                :disabled="this.$v.$invalid"
                @click="submit"
                :btn_text="btn_text"
              ></ButtonWithout>
            </v-form>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>



<script lang='ts'>
import ButtonWithout from "@/components/Buttons/ButtonWithoutBorder.vue";
import { mapState } from "vuex";
import {
  required,
  minLength,
  maxLength,
  email,
  sameAs,
} from "vuelidate/lib/validators";
import Component from "vue-class-component";
import Vue from "vue";

@Component({
  components: { ButtonWithout },
  validations: {
    password: {
      required,
      valid: function (value) {
        const containsUppercase = /[A-Z]/.test(value);
        const containsLowercase = /[a-z]/.test(value);
        const containsNumber = /[0-9]/.test(value);
        const containsSpecial = /[#?!@$%^&*-]/.test(value);

        return (
          containsUppercase &&
          containsLowercase &&
          containsNumber &&
          containsSpecial
        );
      },
      minLength: minLength(8),
      maxLength: maxLength(32),
    },
    password_repeat: { required, sameAsPassword: sameAs("password") },
    // checkbox: { required },
    username: { required, maxLength: maxLength(20), minLength: minLength(3) },
    email: { required, email },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },
  computed: {
    ...mapState("auth", ["isPageLoading"]),
    passwordErrors() {
      const errors: string[] = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.maxLength &&
        errors.push("Password must be at most 32 characters long");
      !this.$v.password.required && errors.push("Password is required");
      !this.$v.password.minLength &&
        errors.push("Password must be at least 8 characters");

      !this.$v.password.valid &&
        errors.push(
          "One Uppercase, One Lowercase, One  number and One Special symbol"
        );
      return errors;
    },
    repeatPasswordErrors() {
      const errors = [];
      !this.$v.password_repeat.sameAsPassword &&
        errors.push("Passwords should match");
      return errors;
    },
    checkboxErrors() {
      const errors: string[] = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
      return errors;
    },
    nameErrors() {
      const errors: string[] = [];
      if (!this.$v.username.$dirty) return errors;
      !this.$v.username.maxLength &&
        errors.push("Name must be at most 20 characters long");
      !this.$v.username.required && errors.push("Name is required");
      !this.$v.username.minLength &&
        errors.push("Name must be at least 3 characters");
      return errors;
    },
    emailErrors() {
      const errors: string[] = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
  },
})
export default class SignUp extends Vue {
  showPass: boolean = false;
  showPass2: boolean = false;
  btn_text: string = "Sign Up";
  password: string = "";
  password_repeat: string = "";
  checkbox: boolean = false;
  username: string = "";
  email: string = "";
  submitted: boolean = false;

  submit() {
    this.$v.$touch();
    const formData = {
      username: this.username,
      email: this.email,
      password: this.password,
      password_repeat: this.password_repeat,
    };
    this.$store.dispatch("auth/SIGN_UP", formData);
  }
}
</script>

<style lang="scss">
.invalid-feedback {
  color: red;
}
.form-group {
  margin: 10px;
}
.pointer:hover {
  cursor: pointer;
}
</style>