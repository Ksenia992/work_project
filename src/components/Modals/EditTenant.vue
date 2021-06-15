<template>
  <v-card
    v-if="tenantById"
    flat
    class="mx-auto pa-3"
    color="#F1FAF7"
    max-width="480px"
  >
    <v-card-title class="pt-0">
      <span>{{ title }}</span>
    </v-card-title>
    <v-form v-model="valid" @submit.prevent="submit">
      <v-row class="d-flex align-baseline">
        <v-col cols="12" class="px-10">
          <p class="grey--text">Domain:</p>

          <v-row class="d-flex align-baseline">
            <v-col cols="12" class="col-sm-6">
              <p class="grey--text">Type:</p>
            </v-col>
            <v-col cols="12" class="col-sm-6">
              <v-select
                :items="types"
                :rules="rules.types"
                color="teal"
                dense
                required
                v-model="tenEd.type"
              ></v-select>
            </v-col>
          </v-row>

          <v-row class="d-flex align-baseline">
            <v-col cols="12" class="col-sm-6">
              <p class="grey--text">Tenant name:</p>
            </v-col>
            <v-col cols="12" class="col-sm-6">
              <v-text-field
                class="black--text"
                :rules="[rules.required]"
                v-model.trim="tenEd.name"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row class="d-flex align-baseline">
            <v-col cols="12" class="col-sm-6">
              <p class="grey--text">Support e-mail:</p>
            </v-col>
            <v-col cols="12" class="col-sm-6">
              <v-text-field
                class="black--text"
                :rules="[rules.required, rules.email]"
                v-model="tenEd.email"
              >
              </v-text-field>
            </v-col>
          </v-row>

          <p class="grey--text">Account status:</p>

          <v-divider width="100%" />

          <v-expansion-panels multiple flat>
            <v-expansion-panel>
              <v-expansion-panel-header color="#F1FAF7" class="pl-0">
                <p class="teal--text text-h6">
                  Main contact
                </p></v-expansion-panel-header
              >
              <v-expansion-panel-content color="#F1FAF7">
                <v-row
                  v-if="tenantById.contactInfo && tenantById.contactInfo.name"
                  class="d-flex align-baseline"
                >
                  <v-col cols="12" class="col-sm-6">
                    <p class="grey--text">Contact name:</p>
                  </v-col>
                  <v-col cols="12" class="col-sm-6">
                    <v-text-field
                      class="black--text"
                      :rules="[rules.required]"
                      v-model.trim="tenEd.contactInfo.name"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row
                  v-if="
                    tenantById.contactInfo && tenantById.contactInfo.phoneNumber
                  "
                  class="d-flex align-baseline"
                >
                  <v-col cols="12" class="col-sm-6">
                    <p class="grey--text">Phone number:</p>
                  </v-col>
                  <v-col cols="12" class="col-sm-6">
                    <v-text-field
                      class="black--text"
                      :rules="[rules.required]"
                      v-model.trim="tenEd.contactInfo.phoneNumber"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>

                <v-row
                  v-if="tenantById.contactInfo && tenantById.contactInfo.email"
                  class="d-flex align-baseline"
                >
                  <v-col cols="12" class="col-sm-6">
                    <p class="grey--text">Email:</p>
                  </v-col>
                  <v-col cols="12" class="col-sm-6">
                    <v-text-field
                      class="black--text"
                      :rules="[rules.required, rules.email]"
                      v-model.trim="tenEd.contactInfo.email"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>

                <p class="red--text" v-else>No more information</p>

                <v-divider width="100%" />
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

          <v-expansion-panels multiple flat>
            <v-expansion-panel>
              <v-expansion-panel-header color="#F1FAF7" class="pl-0">
                <p class="teal--text text-h6">
                  Address information
                </p></v-expansion-panel-header
              >
              <v-expansion-panel-content color="#F1FAF7">
                <v-row
                  v-if="tenantById.address && tenantById.address.street"
                  class="d-flex align-baseline"
                >
                  <v-col cols="12" class="col-sm-6">
                    <p class="grey--text">Street:</p>
                  </v-col>
                  <v-col cols="12" class="col-sm-6">
                    <v-text-field
                      class="black--text"
                      :rules="[rules.required]"
                      v-model.trim="tenEd.address.street"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row
                  v-if="tenantById.address && tenantById.address.zipCode"
                  class="d-flex align-baseline"
                >
                  <v-col cols="12" class="col-sm-6">
                    <p class="grey--text">Postal code:</p>
                  </v-col>
                  <v-col cols="12" class="col-sm-6">
                    <v-text-field
                      class="black--text"
                      :rules="[rules.required]"
                      v-model.trim="tenEd.address.zipCode"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row
                  v-if="tenantById.address && tenantById.address.city"
                  class="d-flex align-baseline"
                >
                  <v-col cols="12" class="col-sm-6">
                    <p class="grey--text">City:</p>
                  </v-col>
                  <v-col cols="12" class="col-sm-6">
                    <v-text-field
                      class="black--text"
                      :rules="[rules.required]"
                      v-model.trim="tenEd.address.city"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row
                  v-if="tenantById.address && tenantById.address.country"
                  class="d-flex align-baseline"
                >
                  <v-col cols="12" class="col-sm-6">
                    <p class="grey--text">Country:</p>
                  </v-col>
                  <v-col cols="12" class="col-sm-6">
                    <v-text-field
                      class="black--text"
                      :rules="[rules.required]"
                      v-model.trim="tenEd.address.country"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <p class="red--text" v-else>No more information</p>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

          <v-col class="d-flex justify-end">
            <SaveBtn :disabled="!valid" :submit="submit" />
          </v-col>
        </v-col>
      </v-row>
    </v-form>
  </v-card>
  <p v-else-if="!tenantById && !errorInTenant"></p>
  <p v-else-if="errorInTenant" class="red--text ma-auto d-flex justify-center">
    NO DATA
  </p>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import { mapState } from "vuex";
import SaveBtn from "@/components/Buttons/SaveBtn.vue";
import { Watch } from "vue-property-decorator";
import { Tenants } from "@/mock/index";

@Component({
  components: { SaveBtn },
  computed: {
    ...mapState("tenants", [
      "isTenantsLoading",
      "tenants",
      "tenantById",
      "errorInTenant",
    ]),
  },
})
export default class EditTenant extends Vue {
  types: string[] = ["Enterprise", "ServiceProvider"];
  tenantById: any;
  tenEd: Tenants = {
    name: "",
    type: "",
    email: "",
    contactInfo: {
      name: "",
      phoneNumber: "",
      email: "",
    },
    address: {
      street: "",
      city: "",
      zipCode: "",
      country: "",
    },
  };

  @Watch("tenantById")
  setTen(newVal: any) {
    if (newVal) {
      this.tenEd = JSON.parse(JSON.stringify(newVal));
      delete this.tenEd._id;
    }
  }
  rules: any = {
    required: (value: string) => !!value || "This field is required",
    email: (value: string) => {
      const pattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+(?:com|net)))$/;
      return pattern.test(value) || "Invalid e-mail.";
    },
  };
  mounted(): void {
    this.$store.dispatch("tenants/GET_TENANT_BYID", {
      tenantId: this.$route.params.id,
    });
  }
  async submit() {
    await this.$store.dispatch("tenants/EDIT_TENANT", {
      tenantId: this.$route.params.id,
      tenant: this.tenEd,
    });

    this.$router.push("/tenants");
  }

  title: string = "Edit tenant";
  valid: boolean = false;
}
</script>

<style lang="scss" scoped>
</style>