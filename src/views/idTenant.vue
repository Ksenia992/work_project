<template>
  <!-- <v-dialog
    :fullscreen="!$vuetify.breakpoint.smAndUp"
    v-model="isOpen"
    max-width="480px"
  > -->
  <v-card
    v-if="tenantById"
    flat
    class="mx-auto pa-3"
    color="#F1FAF7"
    max-width="480px"
  >
    <v-row>
      <v-col class="d-flex justify-end">
        <v-btn icon v-if="!isEdited" @click="openDelete">
          <v-icon color="teal"> mdi-delete </v-icon>
        </v-btn>
        <v-btn v-if="!isEdited" icon @click="edit">
          <v-icon color="teal">mdi-pencil</v-icon>
        </v-btn>

        <v-btn v-else icon @click="edit">
          <v-icon color="teal">mdi-arrow-left-bold</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <slot v-if="isEdited"><EditTenant /></slot>
    <slot v-if="isDelOpen">
      <DeleteTenant :close="openDelete" :delete="deleteTen" />
    </slot>
    <v-card-title class="pt-0" v-if="!isEdited">
      <span>{{ title }}</span>
    </v-card-title>
    <v-row v-if="!isEdited">
      <v-col cols="12" class="px-10">
        <v-alert outlined color="#C0CECA">
          <p class="grey--text">Domain:</p>

          <v-row>
            <v-col cols="12" class="col-sm-6">
              <p class="grey--text">Type:</p>
            </v-col>
            <v-col cols="12" class="col-sm-6">
              <p class="black--text">{{ tenantById.type }}</p>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" class="col-sm-6">
              <p class="grey--text">Tenant name:</p>
            </v-col>
            <v-col cols="12" class="col-sm-6">
              <p class="black--text">{{ tenantById.name }}</p>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" class="col-sm-6">
              <p class="grey--text">Support e-mail:</p>
            </v-col>
            <v-col cols="12" class="col-sm-6">
              <p class="black--text">{{ tenantById.email }}</p>
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
                >
                  <v-col cols="12" class="col-sm-6">
                    <p class="grey--text">Contact name:</p>
                  </v-col>
                  <v-col cols="12" class="col-sm-6">
                    <p class="black--text">
                      {{ tenantById.contactInfo.name }}
                    </p>
                  </v-col>
                </v-row>

                <v-row
                  v-if="
                    tenantById.contactInfo && tenantById.contactInfo.phoneNumber
                  "
                >
                  <v-col cols="12" class="col-sm-6">
                    <p class="grey--text">Phone number:</p>
                  </v-col>
                  <v-col cols="12" class="col-sm-6">
                    <p class="black--text">
                      {{ tenantById.contactInfo.phoneNumber }}
                    </p>
                  </v-col>
                </v-row>

                <v-row
                  v-if="tenantById.contactInfo && tenantById.contactInfo.email"
                >
                  <v-col cols="12" class="col-sm-6">
                    <p class="grey--text">Email:</p>
                  </v-col>
                  <v-col cols="12" class="col-sm-6">
                    <p class="black--text">
                      {{ tenantById.contactInfo.email }}
                    </p>
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
                <v-row v-if="tenantById.address && tenantById.address.street">
                  <v-col cols="12" class="col-sm-6">
                    <p class="grey--text">Street:</p>
                  </v-col>
                  <v-col cols="12" class="col-sm-6">
                    <p class="black--text">{{ tenantById.address.street }}</p>
                  </v-col>
                </v-row>

                <v-row v-if="tenantById.address && tenantById.address.zipCode">
                  <v-col cols="12" class="col-sm-6">
                    <p class="grey--text">Postal code:</p>
                  </v-col>
                  <v-col cols="12" class="col-sm-6">
                    <p class="black--text">
                      {{ tenantById.address.zipCode }}
                    </p>
                  </v-col>
                </v-row>

                <v-row v-if="tenantById.address && tenantById.address.city">
                  <v-col cols="12" class="col-sm-6">
                    <p class="grey--text">City:</p>
                  </v-col>
                  <v-col cols="12" class="col-sm-6">
                    <p class="black--text">{{ tenantById.address.city }}</p>
                  </v-col>
                </v-row>

                <v-row v-if="tenantById.address && tenantById.address.country">
                  <v-col cols="12" class="col-sm-6">
                    <p class="grey--text">Country:</p>
                  </v-col>
                  <v-col cols="12" class="col-sm-6">
                    <p class="black--text">
                      {{ tenantById.address.country }}
                    </p>
                  </v-col>
                </v-row>

                <p class="red--text" v-else>No more information</p>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-alert>
      </v-col>
    </v-row>
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
import EditTenant from "@/components/Modals/EditTenant.vue";
import DeleteTenant from "@/components/Modals/deleteTenant.vue";

// import { IdTenantFields, IdTenantField } from "@/mock/index";
@Component({
  components: { EditTenant, DeleteTenant },
  computed: {
    ...mapState("tenants", [
      "isTenantsLoading",
      "tenants",
      "tenantById",
      "errorInTenant",
    ]),
  },
})
export default class idTenant extends Vue {
  // readonly types: string[] = ["Enterprise", "ServiceProvider"];
  // readonly name: string = "";
  // readonly type: string = "";
  // readonly email: string = "";
  // readonly contactName: string = "";
  // readonly phoneNumber: string = "";
  // readonly contactEmail: string = "";
  // readonly street: string = "";
  // readonly city: string = "";
  // readonly zip: string = "";
  // readonly country: string = "";
  // readonly id: string = "";
  isOpen: boolean = false;
  title: string = "Details";
  isEdited: boolean = false;
  isDelOpen: boolean = false;
  errorInTenant!: boolean;

  open(): void {
    this.isOpen = !this.isOpen;
  }
  close(): void {
    this.isOpen = false;
  }
  mounted(): void {
    this.$store.dispatch("tenants/GET_TENANT_BYID", {
      tenantId: this.$route.params.id,
    });
  }
  edit(): void {
    this.isEdited = !this.isEdited;
  }
  openDelete(): void {
    this.isDelOpen = !this.isDelOpen;
  }
  async deleteTen() {
    await this.$store.dispatch("tenants/DELETE_TENANT", {
      tenantId: this.$route.params.id,
    });
    await this.$store.dispatch("tenants/CLEAR_TENANT");
    if (!this.errorInTenant) {
      this.$router.replace("/tenants");
    }
  }
}
</script>

<style lang="scss">
.v-expansion-panel-content__wrap {
  padding-left: 0 !important;
}
.v-expansion-panel-header__icon {
  .v-icon {
    color: teal !important;
  }
}
.mrg {
  margin-left: 30% !important;
}
</style>