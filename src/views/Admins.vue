<template>
  <v-row>
    <v-col cols="10" class="offset-md-2">
      <v-data-table
        :headers="headers"
        :items="admins"
        disable-sort
        class="elevation-1"
      >
        <template v-slot:top>
          <v-row class="mb-5 pl-5">
            <v-col cols="12" class="d-flex flex-column">
              <h1>Admin management</h1>
            </v-col>

            <v-col cols="12" sm="8" class="d-flex flex-column">
              <v-text-field
                prepend-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <AddBtn @showModal="openFirstModal" />

              <newAdmin ref="newAdm" />
              <editAdmin ref="editAdm" />
              <deleteAdmin ref="deleteAdm" />
              <!-- <test ref="test"></test> -->
              <!-- <deleteAdmin :open="isOpen" /> -->
            </v-col>
          </v-row>

          <v-dialog v-model="dialog" max-width="500px">
            <!-- <template v-slot:activator="{ on, attrs }"> </template> -->

            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.name"
                        label="Dessert name"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.calories"
                        label="Calories"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.fat"
                        label="Fat (g)"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.carbs"
                        label="Carbs (g)"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.protein"
                        label="Protein (g)"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
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
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="openSecondModal">
            mdi-pencil
          </v-icon>
          <v-icon small @click="openThirdModal"> mdi-delete </v-icon>
        </template>
      </v-data-table>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import editAdmin from "@/components/Modals/editAdmin.vue";
import { Admin } from "@/types/types";

import newAdmin from "@/components/Modals/newAdmin.vue";

import deleteAdmin from "@/components/Modals/deleteAdmin.vue";
import AddBtn from "@/components/Buttons/AddBtn.vue";

export default Vue.extend({
  data: () => ({
    isOpen: false,
    dialog: false,
    dialogDelete: false,

    headers: [
      {
        text: "ID",
        align: "start",
        sortable: false,
        value: "id",
      },
      { text: "First name", value: "firstName" },
      { text: "Last name", value: "lastName" },
      { text: "Language", value: "language" },
      { text: "", value: "actions" },
    ],
    admins: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
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
    openFirstModal() {
      this.$refs.newAdm.open();
    },
    openSecondModal() {
      this.$refs.editAdm.open();
    },
    openThirdModal() {
      this.$refs.deleteAdm.open();
    },
    initialize() {
      this.admins = [
        {
          id: "cory_tenant",
          firstName: "Cory",
          lastName: "Johnston",
          language: "English",
        },
        {
          id: "cory_tenant",
          firstName: "Cory",
          lastName: "Johnston",
          language: "English",
        },
        {
          id: "cory_tenant",
          firstName: "Cory",
          lastName: "Johnston",
          language: "English",
        },
        {
          id: "cory_tenant",
          firstName: "Cory",
          lastName: "Johnston",
          language: "English",
        },
        {
          id: "cory_tenant",
          firstName: "Cory",
          lastName: "Johnston",
          language: "English",
        },
        {
          id: "cory_tenant",
          firstName: "Cory",
          lastName: "Johnston",
          language: "English",
        },
        {
          id: "cory_tenant",
          firstName: "Cory",
          lastName: "Johnston",
          language: "English",
        },
        {
          id: "cory_tenant",
          firstName: "Cory",
          lastName: "Johnston",
          language: "English",
        },
        {
          id: "cory_tenant",
          firstName: "Cory",
          lastName: "Johnston",
          language: "English",
        },
        {
          id: "cory_tenant",
          firstName: "Cory",
          lastName: "Johnston",
          language: "English",
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.admins.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.admins.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.admins.splice(this.editedIndex, 1);
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
    closeModal() {
      this.isOpen = false;
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.admins[this.editedIndex], this.editedItem);
      } else {
        this.admins.push(this.editedItem);
      }
      this.close();
    },
  },
  components: {
    editAdmin,

    newAdmin,
    AddBtn,
    deleteAdmin,
  },
});
</script>

<style lang="scss" scoped>
</style>