<script setup lang="ts">
import { button } from "../../../../../../../styled-system/recipes";

import appState from "../../../../../../states";

import MdiFileDocumentCheckOutline from "../../../../icons/mdi-file-document-check-outline.vue";

import Tooltip from "../../../../tooltip/index.vue";

function handleSaveChanges() {
  appState.files = appState.files.map((file) => {
    if (file.id === appState.activeFile?.id) {
      const modfied = { ...file, content: appState.editor!.getValue() };

      appState.activeFile = modfied;

      return modfied;
    } else {
      return file;
    }
  });
}
</script>

<template>
  <Tooltip content="Save editor changes" side="bottom">
    <button
      :class="button({ visual: 'square' })"
      :style="{ pointerEvents: appState.activeFile?.name ? 'auto' : 'none' }"
      @click="handleSaveChanges"
    >
      <MdiFileDocumentCheckOutline />
    </button>
  </Tooltip>
</template>
