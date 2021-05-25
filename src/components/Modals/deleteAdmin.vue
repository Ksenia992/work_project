<template>
  <v-dialog
    :fullscreen="!$vuetify.breakpoint.smAndUp"
    v-model="open"
    max-width="580px"
  >
    <v-card flat class="mx-auto pa-3" color="#F1FAF7" width="100%" c>
      <v-row>
        <v-col class="d-flex justify-end">
          <v-btn icon @click="close">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-col>
        <v-col>
          <p>Are you sure you want to delete admin: {{ admin_name }} ?</p>
          <p>You can't undo this action once deleted</p>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["open"],
  data: () => ({
    admin_name: "cory_tenant",
  }),
};
</script>

<style lang="scss" scoped>
</style>