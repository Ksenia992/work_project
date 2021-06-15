<template>
  <v-dialog
    :fullscreen="!$vuetify.breakpoint.smAndUp"
    v-model="isOpen"
    max-width="620px"
  >
    <v-card flat class="mx-auto pa-3" color="#F1FAF7" width="100%">
      <v-row>
        <v-col class="d-flex justify-end">
          <v-btn icon @click="close">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-card-title class="pt-0">
        <v-icon large left color="#1AAA8D"> mdi-plus-circle-outline</v-icon>
        <span class="title">{{ title }}</span>
      </v-card-title>

      <v-row>
        <v-col cols="12" class="px-10">
          <slot></slot>
        </v-col>
        <v-col class="d-flex justify-end mb-10">
          <CancelBtn :click="close" class="mr-6" />
          <SaveBtn
            class="mr-10"
            :submit="submitHandler"
            :disabled="!isFormValid"
            type="submit"
          />
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import CancelBtn from "@/components/Buttons/CancelBtn.vue";
import SaveBtn from "@/components/Buttons/SaveBtn.vue";

@Component({
  components: { CancelBtn, SaveBtn },
})
export default class ModalGlobal extends Vue {
  isOpen: boolean = false;
  title: string = "";

  @Prop() isFormValid!: boolean;
  @Prop() submit!: () => void;

  submitHandler() {
    this.submit();
    this.close();
  }

  close(): void {
    this.isOpen = false;
  }
  open({ title }: { title: string }) {
    this.title = title;
    this.isOpen = !this.isOpen;
  }
}
</script>

<style lang="scss">
.required::after {
  content: " *";
  color: #1aaa8d;
}
</style>