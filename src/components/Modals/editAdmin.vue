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

<script lang="ts">
import ModalGlobal from "./modalGlobal.vue";
import Vue from "vue";
import Component from "vue-class-component";
import { editAdminFields, EditAdminField } from "@/mock/index";
@Component({
  components: { ModalGlobal },
})
export default class editAdmin extends Vue {
  fields: EditAdminField[] = editAdminFields;

  // open() {
  //   this.$refs.global.open({ title: "Edit admin" });
  // }
  changePassInp(item: any) {
    console.log(item);
    item.showPass = !item.showPass;
    item.appendIcon = item.showPass ? "mdi-eye" : "mdi-eye-off";
    item.type = item.showPass ? "text" : "password";
  }
}
</script>

<style lang="scss">
</style>