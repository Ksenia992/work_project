<template>
  <v-dialog
    :fullscreen="!$vuetify.breakpoint.smAndUp"
    v-model="open"
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
        <v-icon large left color="#1AAA8D"> mdi-plus-circle-outline</v-icon>
        <span class="title">New admin</span>
      </v-card-title>

      <v-row>
        <v-col cols="12" class="px-10">
          <v-row
            v-for="(item, idx) in fields"
            :key="idx"
            xs="12"
            class="pa-0 ma-0"
          >
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
  props: ["open"],
  data: () => ({
    password: "",
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
    changePassInp(item) {
      console.log(item);
      item.showPass = !item.showPass;
      item.appendIcon = item.showPass ? "mdi-eye" : "mdi-eye-off";
      item.type = item.showPass ? "text" : "password";
    },
  },
  components: { CancelBtn, SaveBtn },
};
</script>

<style lang="scss">
.required::after {
  content: " *";
  color: #1aaa8d;
}
</style>