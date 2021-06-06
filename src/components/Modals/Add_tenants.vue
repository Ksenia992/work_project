<template>
  <ModalGlobal ref="global" :submit="submit" :isFormValid="isFormValid">
    <v-form v-model="isFormValid">
      <v-row xs="12" class="pa-0 ma-0 align-baseline">
        <v-col cols="12" sm="4" class="pa-0 ma-0">
          <span class="required">Tenant name: </span>
        </v-col>
        <v-col cols="12" sm="8" class="pa-0 ma-0">
          <v-text-field
            outlined
            dense
            v-model.trim="name"
            required
            :rules="rules.name"
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="4" class="pa-0 ma-0">
          <span class="required">Type: </span>
        </v-col>
        <v-col cols="12" sm="8" class="pa-0 ma-0">
          <v-select
            v-model="type"
            :items="types"
            :rules="rules.types"
            color="teal"
            outlined
            dense
            required
          ></v-select>
        </v-col>
        <v-col cols="12" sm="4" class="pa-0 ma-0">
          <span class="required">Support e-mail: </span>
          <p class="font-weight-bold my-10 text-xs-center">
            Contact information
          </p>
        </v-col>
        <v-col cols="12" sm="8" class="pa-0 ma-0">
          <v-text-field
            outlined
            dense
            label="callconnect@mail.com"
            v-model.trim="email"
            :rules="[rules.required, rules.email]"
            required
          >
          </v-text-field>
        </v-col>

        <v-col cols="12" sm="4" class="pa-0 ma-0">
          <span>Contact name: </span>
        </v-col>
        <v-col cols="12" sm="8" class="pa-0 ma-0">
          <v-text-field outlined dense v-model.trim="contactName">
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="4" class="pa-0 ma-0">
          <span>Phone number: </span>
        </v-col>
        <v-col cols="12" sm="8" class="pa-0 ma-0">
          <v-text-field outlined dense v-model.trim="phoneNumber">
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="4" class="pa-0 ma-0">
          <span>Email: </span>
          <p class="font-weight-bold my-10 text-xs-center">
            Address information
          </p>
        </v-col>

        <v-col cols="12" sm="8" class="pa-0 ma-0">
          <v-text-field
            outlined
            dense
            v-model.trim="contactEmail"
            :rules="[rules.email]"
          >
          </v-text-field>
        </v-col>

        <v-col cols="12" sm="4" class="pa-0 ma-0">
          <span>Street: </span>
        </v-col>
        <v-col cols="12" sm="8" class="pa-0 ma-0">
          <v-text-field outlined dense v-model.trim="street"> </v-text-field>
        </v-col>
        <v-col cols="12" sm="4" class="pa-0 ma-0">
          <span>Postal code: </span>
        </v-col>
        <v-col cols="12" sm="8" class="pa-0 ma-0">
          <v-text-field outlined dense v-model.trim="zip"> </v-text-field>
        </v-col>
        <v-col cols="12" sm="4" class="pa-0 ma-0">
          <span>City: </span>
        </v-col>
        <v-col cols="12" sm="8" class="pa-0 ma-0">
          <v-text-field outlined dense v-model.trim="city"> </v-text-field>
        </v-col>
        <v-col cols="12" sm="4" class="pa-0 ma-0">
          <span>Country: </span>
        </v-col>
        <v-col cols="12" sm="8" class="pa-0 ma-0">
          <v-text-field outlined dense v-model.trim="country"> </v-text-field>
        </v-col>
      </v-row>
    </v-form>
  </ModalGlobal>
</template>

<script>
import ModalGlobal from "./modalGlobal.vue";
import { mapState } from "vuex";
export default {
  data: () => ({
    rules: {
      required: (value) => !!value || "This field is required",
      types: [(val) => (val || "").length > 0 || "This field is required"],
      name: [(val) => (val || "").length > 0 || "This field is required"],
      email: (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      },
    },
    types: ["Enterprise", "ServiceProvider"],
    name: "",
    type: "",
    email: "",
    contactName: "",
    phoneNumber: "",
    contactEmail: "",
    street: "",
    city: "",
    zip: "",
    country: "",
    isFormValid: false,
  }),
  methods: {
    open() {
      this.$refs.global.open({ title: "Add tenants" });
    },
    async submit() {
      const formData = {
        name: this.name,
        type: this.type,
        email: this.email,
        address: {
          street: this.street,
          city: this.city,
          zipCode: this.zip,
          country: this.country,
        },
        contactInfo: {
          name: this.contactName,
          phoneNumber: this.phoneNumber,
          email: this.contactEmail,
        },
      };

      console.log(formData);
      await this.$store.dispatch("tenants/ADD_TENANTS", formData);
      console.log(formData);

      // if (this.isLogged) {
      //   this.$router.push("/");
      // }
    },
  },

  computed: {
    ...mapState("tenants", ["isTenantsLoading", "tenants"]),
  },

  components: { ModalGlobal },
};
</script>

<style lang="scss" >
</style>