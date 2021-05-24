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
        <v-col cols="12" md="6" justify="center" align="center">
          <v-form @submit.prevent="submitHandler">
            <v-text-field
              v-model.trim="name"
              :error-messages="nameErrors"
              label="Name"
              :counter="20"
              minLength="3"
              maxLength="20"
              required
              prepend-inner-icon="far fa-user"
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            ></v-text-field>
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
              :counter="32"
              minLength="8"
              maxLength="32"
              label="Password"
              required
              @input="$v.password.$touch()"
              @blur="$v.password.$touch()"
            ></v-text-field>
            <v-text-field
              v-model.trim="password_repeat"
              :error-messages="passwordRepeatErrors"
              prepend-inner-icon="fas fa-lock"
              :append-icon="showPass2 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPass2 ? 'text' : 'password'"
              @click:append="showPass2 = !showPass2"
              :counter="32"
              minLength="8"
              maxLength="32"
              label="Repeat password"
              required
              @input="$v.password_repeat.$touch()"
              @blur="$v.password_repeat.$touch()"
            ></v-text-field>
            <p class="font-weight-bold text-decoration-underline pointer">
              Forgot your password?
            </p>

            <v-checkbox
              v-model="checkbox"
              :error-messages="checkboxErrors"
              label="I agree to the Terms of User"
              required
              @change="$v.checkbox.$touch()"
              @blur="$v.checkbox.$touch()"
            ></v-checkbox>

            <!-- <v-checkbox v-model="checkbox">
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
            </v-checkbox> -->

            <ButtonWithout
              :disabled="this.$v.$invalid"
              @click="submitHandler"
              :btn_text="btn_text"
            ></ButtonWithout>
          </v-form>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  maxLength,
  minLength,
  email,
  sameAs,
} from "vuelidate/lib/validators";
import ButtonWithout from "@/components/Buttons/ButtonWithoutBorder.vue";

export default {
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(20), minLength: minLength(3) },
    email: { required, email },

    password: { required, maxLength: maxLength(32), minLength: minLength(8) },
    password_repeat: {
      required,
      maxLength: maxLength(32),
      minLength: minLength(8),
    },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  data: () => ({
    name: "",
    email: "",
    password: "",
    password_repeat: "",
    btn_text: "Sign Up",
    showPass: false,
    showPass2: false,
    checkbox: false,
  }),

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
      return errors;
    },

    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 20 characters long");
      !this.$v.name.required && errors.push("Name is required");
      !this.$v.name.minLength &&
        errors.push("Name must be at least 3 characters");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push("Password must be at least 8 symbols");
      !this.$v.password.maxLength &&
        errors.push("Password can't be more than 32 symbols");
      !this.$v.password.required && errors.push("Password is required.");
      return errors;
    },
    passwordRepeatErrors() {
      const errors = [];
      if (!this.$v.password_repeat.$dirty) return errors;
      !this.$v.password_repeat.minLength &&
        errors.push("Password must be at least 8 symbols");
      !this.$v.password_repeat.maxLength &&
        errors.push("Password can't be more than 32 symbols");
      !this.$v.password_repeat.required && errors.push("Password is required.");
      return errors;
    },
  },

  methods: {
    submitHandler() {
      this.$v.$touch();
    },
  },
  components: { ButtonWithout },
};
</script>

<style lang="scss" scoped>
</style>