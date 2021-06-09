<template>
  <v-row class="justify-center">
    <router-view />
    <v-col cols="10">
      <v-card>
        <v-card-title>
          <v-text-field
            prepend-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            v-model="search"
          ></v-text-field>
        </v-card-title>

        <v-row>
          <v-col cols="12" xs="12">
            <v-data-table
              v-if="!isTenantsLoading && tenants"
              :headers="headers"
              :items="tenants"
              :items-per-page="5"
              class="elevation-1"
              disable-sort
              :search="search"
              :page="page"
              @click:row="openById"
            >
              <template v-slot:top>
                <v-toolbar flat>
                  <v-spacer></v-spacer>
                  <AddBtn @showModal="openAdd" />
                  <AddTable ref="addTenants" />
                  <!-- <IdTenant ref="idTenant" /> -->
                </v-toolbar>
              </template>
            </v-data-table>
            <v-card v-else>
              <v-row>
                <v-col cols="12" md="12">
                  <v-skeleton-loader
                    type="card-avatar, article, actions"
                  ></v-skeleton-loader>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
      <v-btn @click="logOut" color="primary" class="ma-16">logout</v-btn>
    </v-col>
  </v-row>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import AddTable from "@/components/Modals/Add_tenants.vue";
import IdTenant from "@/views/idTenant.vue";
import AddBtn from "@/components/Buttons/AddBtn.vue";
import { mapState } from "vuex";
import { Watch } from "vue-property-decorator";

import { tenantsTableHeaders, TenantsTableHeader } from "@/mock/index";

@Component({
  components: { AddTable, AddBtn, IdTenant },
  computed: {
    ...mapState("tenants", ["isTenantsLoading", "tenants"]),
    ...mapState("auth", ["isLogged"]),
  },
})
export default class MainTable extends Vue {
  search: string = "";
  page: number = 1;

  isVisible: boolean = false;
  dialog: boolean = false;
  dialogDelete: boolean = false;
  isLogged!: boolean;
  isTenantsLoading!: boolean;
  headers: TenantsTableHeader[] = tenantsTableHeaders;
  editedIndex: number = -1;

  get tenants2(): any[] | null {
    if (!this.$store.state.tenants) return null;
    return this.$store.state.tenants.tenants;
  }

  mounted() {
    this.$store.dispatch("tenants/GET_TENANTS");
    console.log(this.$store);
  }

  @Watch("dialog")
  watchDialog(_prevValue: boolean) {
    console.log(_prevValue);
    //  val || this.close();
  }

  @Watch("dialogDelete")
  watchDialogDelete(_prevValue: boolean) {
    // val || this.closeDelete();
  }

  @Watch("page")
  watchPage(_prevValue: number, _newValue: number) {
    console.log(this.page);
    this.$store.dispatch("tenants/GET_TENANTS_PERPAGE", _newValue);
  }

  // watch: {
  //   dialog(val) {
  //     val || this.close();
  //   },
  //   dialogDelete(val) {
  //     val || this.closeDelete();
  //   },
  //   page(newVal) {
  //     this.$store.dispatch("tenants/GET_TENANTS_PERPAGE", newVal);
  //   };
  // };

  // created() {
  //   this.initialize();
  // },

  openAdd() {
    this.$refs.addTenants.open();
  }

  // async openById({ _id }: any) {
  //   console.log(_id);
  //   await this.$store.dispatch("tenants/GET_TENANT_BYID", {
  //     tenantId: _id,
  //   });

  //   this.$refs.idTenant.open();
  // }

  openById({ _id }: any) {
    this.$router.push(`/tenants/${_id}`);
  }

  closeModal() {
    this.isVisible = false;
  }
  async logOut() {
    await this.$store.dispatch("auth/LOG_OUT");
    console.log(this.isLogged);
    if (!this.isLogged) {
      this.$router.push("/login");
    }
  }
}
</script>



<style lang="scss">
.v-data-table-header th {
  background: #1aaa8d !important;
  color: #fff !important;
}
tbody tr td {
  width: 10% !important;
}

.v-data-table__wrapper table tbody tr:hover {
  background: #f1faf7 !important;
}
</style>


  