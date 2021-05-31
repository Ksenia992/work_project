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
            >
              <template v-slot:top>
                <v-toolbar flat>
                  <v-spacer></v-spacer>
                  <AddBtn @showModal="openAdd" />
                  <AddTable ref="addTenants" />
                </v-toolbar>
              </template>
            </v-data-table>
            <v-card v-else>
              <v-row>
                <v-col cols="12" md="12">
                  <v-skeleton-loader
                    v-bind="attrs"
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

<script>
import AddTable from "../components/Modals/Add_table.vue";
import AddBtn from "../components/Buttons/AddBtn.vue";
import { mapState } from "vuex";

export default {
  data: () => ({
    attrs: {
      class: "mb-6",
      boilerplate: true,
      elevation: 2,
    },
    isVisible: false,
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "№",
        align: "start",
        sortable: false,
        value: "name",
        filterable: false,
        divider: true,
      },
      { text: "ID", value: "type" },
      { text: "Name", value: "name" },
      { text: "Type", value: "email" },
    ],
    editedIndex: -1,
    editedItem: {
      name: "",
      type: "",
      support: "",
      contact_name: "",
      phone: "",
      email: "",
      street: "",
      postal: "",
      city: "",
      country: "",
    },
    defaultItem: {
      name: "",
      type: "",
      support: "",
      contact_name: "",
      phone: "",
      email: "",
      street: "",
      postal: "",
      city: "",
      country: "",
    },
  }),

  computed: {
    ...mapState("tenants", ["isTenantsLoading", "tenants"]),
    ...mapState("auth", ["isLogged"]),
    tenants2() {
      if (!this.$store.state.tenants) return null;
      return this.$store.state.tenants.tenants;
    },
  },
  mounted() {
    this.$store.dispatch("tenants/GET_TENANTS");
    console.log(this.$store);
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  // created() {
  //   this.initialize();
  // },

  methods: {
    openAdd() {
      this.$refs.addTenants.open();
    },
    closeModal() {
      this.isVisible = false;
    },
    async logOut() {
      await this.$store.dispatch("auth/LOG_OUT");
      console.log(this.isLogged);
      if (!this.isLogged) {
        this.$router.push("/login");
      }
    },
    // initialize() {
    //   this.desserts = [
    //     {
    //       name: "Frozen Yogurt",
    //       type: 159,
    //       support: 6.0,
    //       email: 24,
    //       street: 4.0,
    //     },
    //   ];
    // },

    // save() {
    //   if (this.editedIndex > -1) {
    //     Object.assign(this.desserts[this.editedIndex], this.editedItem);
    //   } else {
    //     this.desserts.push(this.editedItem);
    //   }
    //   this.close();
    // },
    // showModal() {
    //   this.isVisible = true;
    // },
  },
  components: { AddTable, AddBtn },
};
</script>



<style lang="scss">
.v-data-table-header th {
  background: #1aaa8d !important;
  color: #fff !important;
}
tbody tr td {
  width: 10% !important;
}
// .v-data-table__wrapper table tbody tr td:second-child {
//   color: red !important;
// }

.v-data-table__wrapper table tbody tr:hover {
  background: #f1faf7 !important;
}
// tbody tr td:second-child {
//   color: red !important;
// }
// .v-subheader {
//   padding: 0 !important;
// }
</style>

      