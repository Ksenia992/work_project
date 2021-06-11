<template>
  <v-card flat class="mx-auto pa-3" color="#F1FAF7" width="100%">
    <v-row>
      <v-col class="d-flex justify-end"> </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="px-10">
        <p>Are you sure you want to delete this tenant?</p>
      </v-col>
    </v-row>

    <v-col class="d-flex justify-end mb-10">
      <CancelBtn :click="closeModal" />
      <DeleteBtn :click="deleteTen" />
      <Error v-if="errorInTenant" />
    </v-col>
  </v-card>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import CancelBtn from "@/components/Buttons/CancelBtn.vue";
import DeleteBtn from "@/components/Buttons/DeleteBtn.vue";
import Error from "@/components/Modals/Error.vue";
import { Prop } from "vue-property-decorator";
import { mapState } from "vuex";

@Component({
  components: { CancelBtn, DeleteBtn, Error },
  computed: {
    ...mapState("tenants", [
      "isTenantsLoading",
      "tenants",
      "tenantById",
      "errorInTenant",
    ]),
  },
})
export default class deleteTenant extends Vue {
  @Prop() close!: () => void;
  @Prop() delete!: () => void;

  closeModal() {
    this.close();
  }

  deleteTen() {
    this.delete();
  }
  // destroyed() {
  //   this.$store.dispatch("tenants/CLEAR_TENANT")
  // }
}
</script>

<style lang="scss" scoped>
</style>