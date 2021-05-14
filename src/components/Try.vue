<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        prepend-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>

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
          <v-dialog v-model="dialog" max-width="620px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="#1AAA8D"
                class="white--text pa-5"
                elevation="2"
                v-bind="attrs"
                v-on="on"
                rounded
                >Add <v-icon right> mdi-plus-circle-outline </v-icon></v-btn
              >
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h4"
                  ><v-icon left> mdi-plus-circle-outline </v-icon
                  >{{ formTitle }}
                </span>
                <v-col>
                  <v-btn icon @click="close">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-col>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="4">
                      <v-subheader>Tenant name:*</v-subheader>
                    </v-col>
                    <v-col cols="8">
                      <v-text-field
                        outlined
                        v-model="editedItem.name"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-subheader>Type:*</v-subheader>
                    </v-col>
                    <v-col cols="8">
                      <v-text-field
                        outlined
                        v-model="editedItem.type"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-subheader>Support e-mail:*</v-subheader>
                    </v-col>
                    <v-col cols="8">
                      <v-text-field
                        outlined
                        label="callconnect@mail.com"
                        v-model="editedItem.support"
                      ></v-text-field>
                    </v-col>

                    <v-card-title>
                      <span class="text-h5">Contact information</span>
                    </v-card-title>

                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="4">
                            <v-subheader>Contact name:</v-subheader>
                          </v-col>
                          <v-col cols="8">
                            <v-text-field
                              outlined
                              v-model="editedItem.contact_name"
                            ></v-text-field>
                          </v-col>

                          <v-col cols="4">
                            <v-subheader>Phone number:</v-subheader>
                          </v-col>
                          <v-col cols="8">
                            <v-text-field
                              outlined
                              v-model="editedItem.phone"
                            ></v-text-field>
                          </v-col>

                          <v-col cols="4">
                            <v-subheader>Email:</v-subheader>
                          </v-col>
                          <v-col cols="8">
                            <v-text-field
                              outlined
                              v-model="editedItem.email"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-title>
                <span class="text-h5">Address information</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="4">
                      <v-subheader>Street:</v-subheader>
                    </v-col>
                    <v-col cols="8">
                      <v-text-field
                        outlined
                        v-model="editedItem.street"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="4">
                      <v-subheader>Postal code:</v-subheader>
                    </v-col>
                    <v-col cols="8">
                      <v-text-field
                        outlined
                        v-model="editedItem.postal"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="4">
                      <v-subheader>City:</v-subheader>
                    </v-col>
                    <v-col cols="8">
                      <v-text-field
                        outlined
                        v-model="editedItem.city"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="4">
                      <v-subheader>Country:</v-subheader>
                    </v-col>
                    <v-col cols="8">
                      <v-text-field
                        outlined
                        v-model="editedItem.country"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="#fff"
                  class="grey--text"
                  rounded
                  medium
                  outlined
                  @click="close"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="#1AAA8D"
                  class="white--text"
                  rounded
                  medium
                  @click="save"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline"
                >Are you sure you want to delete this item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template>
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  data: () => ({
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

  methods: {
    initialize() {
      this.desserts = [
        {
          name: "Frozen Yogurt",
          type: 159,
          support: 6.0,
          email: 24,
          street: 4.0,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
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

      