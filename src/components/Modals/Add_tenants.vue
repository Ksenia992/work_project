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
          <span class="required">Contact name: </span>
        </v-col>
        <v-col cols="12" sm="8" class="pa-0 ma-0">
          <v-text-field
            outlined
            dense
            v-model.trim="contactName"
            :rules="[rules.required]"
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="4" class="pa-0 ma-0">
          <span class="required">Phone number: </span>
        </v-col>
        <v-col cols="12" sm="8" class="pa-0 ma-0">
          <v-text-field
            outlined
            dense
            v-model.trim="phoneNumber"
            :rules="[rules.required]"
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="4" class="pa-0 ma-0">
          <span class="required">Email: </span>
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
          <span class="required">Street: </span>
        </v-col>
        <v-col cols="12" sm="8" class="pa-0 ma-0">
          <v-text-field
            outlined
            dense
            v-model.trim="street"
            :rules="[rules.required]"
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="4" class="pa-0 ma-0">
          <span class="required">Postal code: </span>
        </v-col>
        <v-col cols="12" sm="8" class="pa-0 ma-0">
          <v-text-field
            outlined
            dense
            v-model.trim="zip"
            :rules="[rules.required]"
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="4" class="pa-0 ma-0">
          <span class="required">City: </span>
        </v-col>
        <v-col cols="12" sm="8" class="pa-0 ma-0">
          <v-text-field
            outlined
            dense
            v-model.trim="city"
            :rules="[rules.required]"
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="4" class="pa-0 ma-0">
          <span class="required">Country: </span>
        </v-col>
        <v-col cols="12" sm="8" class="pa-0 ma-0">
          <v-text-field
            outlined
            dense
            v-model.trim="country"
            :rules="[rules.required]"
          >
          </v-text-field>
        </v-col>
      </v-row>
    </v-form>
  </ModalGlobal>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ModalGlobal from "./modalGlobal.vue";
import { mapState } from "vuex";

@Component({
  components: { ModalGlobal },
  computed: {
    ...mapState("tenants", ["isTenantsLoading", "tenants"]),
  },
})
export default class Add_tenants extends Vue {
  rules: any = {
    required: (value: string) => !!value || "This field is required",
    types: [
      (val: string) => (val || "").length > 0 || "This field is required",
    ],
    name: [(val: string) => (val || "").length > 0 || "This field is required"],
    email: (value: string) => {
      const pattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+(?:com|net)))$/;
      return pattern.test(value) || "Invalid e-mail.";
    },
  };

  types: string[] = ["Enterprise", "ServiceProvider"];
  name: string = "";
  type: string = "";
  email: string = "";
  contactName: string = "";
  phoneNumber: string = "";
  contactEmail: string = "";
  street: string = "";
  city: string = "";
  zip: string = "";
  country: string = "";
  isFormValid: boolean = false;

  open() {
    this.$refs.global.open({ title: "Add tenants" });
  }
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

    await this.$store.dispatch("tenants/ADD_TENANTS", formData);

    console.log(formData);
  }
}
</script>

<style lang="scss" >
</style>