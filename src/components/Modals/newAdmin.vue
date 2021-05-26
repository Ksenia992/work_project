<template>
  <ModalGlobal ref="global">
    <v-row v-for="(item, idx) in fields" :key="idx" xs="12" class="pa-0 ma-0">
      <v-col cols="12" sm="4" class="pa-0 ma-0">
        <span :class="{ required: item.required }">{{ item.title }}</span>
      </v-col>
      <v-col cols="12" sm="8" class="pa-0 ma-0"
        ><v-text-field
          :append-icon="item.appendIcon"
          :type="item.type"
          @click:append="changePassInp(item)"
          v-model.trim="item.value"
          outlined
          dense
          >{{ item.field }}
        </v-text-field>
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
        title: "Admin ID:",
        icon: "mdi-account-group-outline",
        type: "text",
        required: true,
        field: "",
        value: "",
      },
      {
        title: "First name:",
        icon: "mdi-phone",
        field: "",
        required: true,
        type: "text",
      },
      {
        title: "Last name:",
        icon: "mdi-account-circle",
        field: "",
        required: true,
        value: "",
        type: "text",
      },
      {
        title: "Language:",
        icon: "mdi-account-group",
        field: "",
        type: "text",
        required: true,
      },

      {
        title: "Email:",
        icon: "mdi-magnify",
        field: "",
        required: true,
        type: "text",
      },
      {
        title: "Password:",
        icon: "mdi-magnify",
        type: "password",
        required: true,
        field: "",
        showPass: false,
        appendIcon: "mdi-eye-off",
      },
      {
        title: "Confirm password:",
        icon: "mdi-magnify",
        field: "",
        type: "password",
        required: true,
        showPass: false,
        appendIcon: "mdi-eye-off",
      },
    ],
  }),
  methods: {
    open() {
      this.$refs.global.open({ title: "New admin" });
    },
    changePassInp(item) {
      console.log(item);
      item.showPass = !item.showPass;
      item.appendIcon = item.showPass ? "mdi-eye" : "mdi-eye-off";
      item.type = item.showPass ? "text" : "password";
    },
  },
  components: { ModalGlobal },
};
</script>

<style lang="scss">
</style>