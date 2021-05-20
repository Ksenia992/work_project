<template>
  <v-row class="justify-center">
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
              :headers="headers"
              :items="desserts"
              sort-by="calories"
              class="elevation-1"
              disable-sort
            >
              <template v-slot:top>
                <v-toolbar flat>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="#1AAA8D"
                    class="white--text pa-5"
                    elevation="2"
                    rounded
                    @click="() => (isVisible = !isVisible)"
                    >Add <v-icon right> mdi-plus-circle-outline </v-icon></v-btn
                  >
                  <Add :show="isVisible" @close="closeModal" />
                </v-toolbar>
              </template>
            </v-data-table>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Add from "./Add_table.vue";
export default {
  data: () => ({
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
      { text: "Name", value: "support" },
      { text: "Type", value: "email" },
    ],
    desserts: [],
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
    formTitle() {
      return (this.editedIndex = "Add tenants");
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },
  components: { Add },

  methods: {
    closeModal() {
      this.isVisible = false;
    },
    initialize() {
      this.desserts = [
        {
          name: "Frozen Yogurt",
          type: 159,
          support: 6.0,
          email: 24,
          street: 4.0,
        },
      ];
    },

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

      