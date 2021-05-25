<template>
  <v-dialog
    :fullscreen="!$vuetify.breakpoint.smAndUp"
    v-model="show"
    max-width="620px"
  >
    <v-card flat class="mx-auto pa-3" color="#F1FAF7" width="100%" c>
      <v-row>
        <v-col class="d-flex justify-end">
          <v-btn icon @click="close">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-card-title class="pt-0">
        <span class="text-h4"
          ><v-icon left color="#1AAA8D"> mdi-plus-circle-outline </v-icon
          >{{ formTitle }}
        </span>
      </v-card-title>
      <v-row>
        <v-col cols="12" class="px-10">
          <v-row
            v-for="(item, idx) in fields"
            :key="idx"
            xs="12"
            class="pa-0 ma-0 align-baseline"
          >
            <v-col cols="12" sm="4" class="pa-0 ma-0">
              <span :class="{ required: item.required }">{{ item.title }}</span>
              <p class="font-weight-bold my-10 text-xs-center">
                {{ item.mainTitle }}
              </p>
            </v-col>

            <v-col cols="12" sm="8" class="pa-0 ma-0"
              ><v-text-field outlined dense>{{ item.field }} </v-text-field>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="d-flex justify-end mb-10">
          <CancelBtn @close="close" class="mr-6" />
          <SaveBtn class="mr-10" />
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
import CancelBtn from "@/components/Buttons/CancelBtn.vue";
import SaveBtn from "@/components/Buttons/SaveBtn.vue";
export default {
  props: ["show"],
  data: () => ({
    fields: [
      {
        title: "Tenant name:",

        required: true,
        field: "",
      },
      {
        title: "Type:",

        field: "",
        required: true,
      },
      {
        title: "Support e-mail:",

        field: "",
        required: true,
        label: "callconnect@mail.com",
        mainTitle: "Contact information",
      },
      {
        title: "Contact name:",

        field: "",
      },

      {
        title: "Phone number:",

        field: "",
      },
      {
        title: "Email:",

        field: "",
        mainTitle: "Address information",
      },
      {
        title: "Street:",

        field: "",
      },
      {
        title: "Postal code:",

        field: "",
      },
      {
        title: "City:",

        field: "",
      },
      {
        title: "Country:",

        field: "",
      },
    ],
  }),
  methods: {
    close() {
      this.$emit("close");
      this.open = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
  },

  computed: {
    formTitle() {
      return (this.editedIndex = "Add tenants");
    },
  },

  watch: {
    show(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
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
      ];
    },

    close() {
      this.$emit("close");
      this.show = false;
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
  components: { CancelBtn, SaveBtn },
};
</script>

<style lang="scss" >
.required::after {
  content: " *";
  color: #1aaa8d;
}
</style>