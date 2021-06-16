<template>
  <v-row class="justify-center">
    <router-view />
    <v-col cols="10">
      <v-card flat class="mt-4">
        <v-card-title>
          <v-text-field
            dense
            prepend-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            v-model="search"
          ></v-text-field>

          <v-col class="d-flex justify-end">
            <AddBtn @showModal="openAdd" />
            <AddTable ref="addTenants" />
          </v-col>
        </v-card-title>

        <v-row>
          <v-col cols="12" xs="12" class="pb-0">
            <v-data-table
              v-if="!isTenantsLoading && tenants"
              :headers="headers"
              :server-items-length="serverItm"
              :items="tenants"
              class="elevation-1"
              disable-sort
              :items-per-page="perPage"
              :search="search"
              @update:items-per-page="updatePerPage"
              :page="page"
              @update:page="updatePage"
              @click:row="openById"
            >
              <!-- <template v-slot:top>
                <v-toolbar flat>
                  <v-spacer></v-spacer>
                  <AddBtn @showModal="openAdd" />
                  <AddTable ref="addTenants" />
                </v-toolbar>
              </template> -->
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
    ...mapState("tenants", ["isTenantsLoading", "tenants", "serverItems"]),
    ...mapState("auth", ["isLogged"]),
  },
})
export default class MainTable extends Vue {
  search: string = "";
  perPage = 5;
  page = 1;

  serverItm!: number;

  updatePage(page: number) {
    this.page = page;
    this.updateData();
  }

  updatePerPage(perPage: number) {
    this.perPage = perPage;
    this.updateData();
  }

  updateData() {
    this.$store.dispatch("tenants/GET_TENANTS_BYQUERY", {
      page: this.page,
      perPage: this.perPage,
    });
  }

  itemsPer(val: any) {
    console.log(val);
    // this.$router.push({
    //   query: { perPage: val },
    // });
    // console.log(this.$route.query.perPage);
    // this.$store.dispatch("tenants/GET_TENANTS_PERPAGE", {
    //   perPage: this.$route.query.perPage,
    // });
  }

  // this.$store.dispatch("tenants/GET_TENANT_BYID", {
  //     tenantId: this.$route.params.id,
  //   });

  // :page="paramPage"
  //  @pagination="setQueryPage"
  // :items-per-page="5"

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
  // setQueryPage(paginationObject: any) {
  //   let url = "tenants?perPage=" + paginationObject.page;
  //   window.history.pushState("", "", url);
  //   console.log(this.$route.query.perPage);
  //   console.log(this.$route.params.perPage);
  //   this.$router.push({
  //     path: "tenants",
  //     query: { perPage: "page" },
  //   });
  // }

  mounted() {
    this.$store.dispatch("tenants/GET_TENANTS_BYQUERY", {
      page: this.page,
      perPage: this.perPage,
    });

    // this.$store.dispatch("tenants/GET_TENANTS");
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

  @Watch("serverItems")
  watchServerItems(val: number) {
    console.log(val);
    this.serverItm = val;
  }

  openAdd() {
    this.$refs.addTenants.open();
  }

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
// .v-card {
//   border: none !important;
// }
.v-data-table-header th {
  background: #1aaa8d !important;
  color: #fff !important;
}
tbody tr td {
  width: 10% !important;
}

.v-data-table__wrapper table tbody tr:hover {
  background: #f1faf7 !important;
  cursor: pointer !important;
}
// .v-input__slot:before {
//   border-color: transparent !important;
// }
</style>


  