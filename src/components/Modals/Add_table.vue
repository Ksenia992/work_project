<template>
  <ModalGlobal ref="global">
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
  </ModalGlobal>
</template>

<script>
import ModalGlobal from "./modalGlobal.vue";
export default {
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
    open() {
      this.$refs.global.open({ title: "Add tenants" });
    },
  },

  components: { ModalGlobal },
};
</script>

<style lang="scss" >
</style>