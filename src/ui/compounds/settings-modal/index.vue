<script setup lang="ts">
import { Settings as SettingsType } from "~/types/index";

import { computed, provide, ref } from "vue";

import { content, separator } from "./styles";

import { Modal, ModalContent, ModalTitle } from "~/ui/primitives/modal";

import { FileState, ModalState } from "~/states/index";

import CurrentFile from "./components/current-file/index.vue";
import Settings from "./components/settings/index.vue";

const queue = computed(() =>
  ModalState.settings.method === "single"
    ? [FileState.activeFile]
    : FileState.selectedFiles,
);

const currentEntry = ref(queue.value[0]);

const settings = ref<SettingsType[]>([
  {
    assetsPath: "ASSETS/Characters/[character name]/Skins/[skin]/Particles",
    filePath: "Characters/[character name]/Skins/[skin number]/Particles",
    namesOnly: false,
    settingsPreset: "Default",
    updateFileTypes: true,
  },
]);

provide("currentEntry", currentEntry);
provide("settings", settings);
</script>

<template>
  <Modal
    @update:open="(v) => (ModalState.settings.open = v)"
    :open="ModalState.settings.open"
  >
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
