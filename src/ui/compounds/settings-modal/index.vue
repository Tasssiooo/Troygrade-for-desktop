<script setup lang="ts">
import { provide, ref } from "vue";

import { content, separator } from "./styles";

import { Modal, ModalContent, ModalTitle } from "~/ui/primitives/modal";

import { mm } from "~/stores/index";

import CurrentFile from "./components/current-file/index.vue";
import Settings from "./components/settings/index.vue";

const currentIndex = ref(0);

provide("current_index", currentIndex);
</script>

<template>
  <Modal @update:open="(v) => mm.openSettings(v)" :open="mm.settings.open">
    <ModalContent>
      <ModalTitle>Conversion settings</ModalTitle>
      <div :class="content">
        <CurrentFile />
        <div :class="separator" />
        <Settings />
      </div>
    </ModalContent>
  </Modal>
</template>
