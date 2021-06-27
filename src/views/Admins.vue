<template>
  <v-row>
    <v-col cols="12" >
 
    <v-data-table
      :headers="headers"
      :items="admins"
      disable-sort
      class="elevation-1"
    >
      <template v-slot:top>
        <v-row class="mb-5 mt-3 pl-5">
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
            <AddBtn @showModal="openModal('newAdm')" />

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
              <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
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
        <v-icon small class="mr-2" @click="openModal('editAdm')">
          mdi-pencil
        </v-icon>
        <v-icon small @click="openModal('deleteAdm')"> mdi-delete </v-icon>
      </template>
    </v-data-table>
 
  </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import editAdmin from "@/components/Modals/editAdmin.vue";

import newAdmin from "@/components/Modals/newAdmin.vue";
import { Watch } from "vue-property-decorator";

import deleteAdmin from "@/components/Modals/deleteAdmin.vue";
import AddBtn from "@/components/Buttons/AddBtn.vue";

import { adminTableHeaders, AdminTableHeader } from "@/mock/index";

type Admin = {
  id: string;
  firstName: string;
  lastName: string;
  language: string;
};
@Component({
  components: { deleteAdmin, AddBtn, newAdmin, editAdmin },
})
export default class Admins extends Vue {
  isOpen: boolean = false;
  dialog: boolean = false;
  dialogDelete: boolean = false;
  headers: AdminTableHeader[] = adminTableHeaders;
  admins: Admin[] = [];

  editedIndex: number = -1;
  editedItem: any = {
    name: "",
    calories: 0,
    fat: 0,
    carbs: 0,
    protein: 0,
  };

  defaultItem: object = {
    name: "",
    calories: 0,
    fat: 0,
    carbs: 0,
    protein: 0,
  };

  get formTitle(): string {
    return this.editedIndex === -1 ? "New Item" : "Edit Item";
  }

  // @Watch("dialog")
  // watchDialog(val) {
  //   val || this.close();
  // }

  //   dialogDelete(val) {
  //     val || this.closeDelete();
  //   },
  // },

  created() {
    this.initialize();
  }

  openModal(name: string): void {
    if (!this.$refs[name] || !this.$refs[name].open) return;
    this.$refs[name].open();
  }

  initialize(): void {
    this.admins = [
      {
        id: "cory_tenant",
        firstName: "Cory",
        lastName: "Johnston",
        language: "English",
      },

      {
        id: "cory_tejhhhjhjnant",
        firstName: "Cory",
        lastName: "Johnston",
        language: "English",
      },
      {
        id: "cory_t,mm,,mmenant",
        firstName: "Cory",
        lastName: "Johnston",
        language: "English",
      },
      {
        id: "cormnmnmny_tenant",
        firstName: "Cory",
        lastName: "Johnston",
        language: "English",
      },
      {
        id: "coryfpopoyyu_tenant",
        firstName: "Cory",
        lastName: "Johnston",
        language: "English",
      },
      {
        id: "corygfhfghhfghgf_tenant",
        firstName: "Cory",
        lastName: "Johnston",
        language: "English",
      },
      {
        id: "corghgfhgfhy_tenant",
        firstName: "Cory",
        lastName: "Johnston",
        language: "English",
      },
      {
        id: "cory_dsdsdsdstenant",
        firstName: "Cory",
        lastName: "Johnston",
        language: "English",
      },
      {
        id: "cory_tdsdsdsdsdsenant",
        firstName: "Cory",
        lastName: "Johnston",
        language: "English",
      },
      {
        id: "dsdsds",
        firstName: "Cory",
        lastName: "Johnston",
        language: "English",
      },
    ];
  }

  // editItem(item) {
  //   this.editedIndex = this.admins.indexOf(item);
  //   this.editedItem = Object.assign({}, item);
  //   this.dialog = true;
  // }

  // deleteItem(item) {
  //   this.editedIndex = this.admins.indexOf(item);
  //   this.editedItem = Object.assign({}, item);
  //   this.dialogDelete = true;
  // }

  // deleteItemConfirm() {
  //   this.admins.splice(this.editedIndex, 1);
  //   this.closeDelete();
  // }

  close() {
    this.dialog = false;
    this.$nextTick(() => {
      this.editedItem = Object.assign({}, this.defaultItem);
      this.editedIndex = -1;
    });
  }

  closeDelete() {
    this.dialogDelete = false;
    this.$nextTick(() => {
      this.editedItem = Object.assign({}, this.defaultItem);
      this.editedIndex = -1;
    });
  }
  closeModal() {
    this.isOpen = false;
  }

  save() {
    if (this.editedIndex > -1) {
      Object.assign(this.admins[this.editedIndex], this.editedItem);
    } else {
      this.admins.push(this.editedItem);
    }
    this.close();
  }
}
</script>

<style lang="scss" scoped>
</style>