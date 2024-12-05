<script setup lang="ts">
import { button } from "~/styled-system/recipes";

import { FileState, ToolState } from "~/states/index";

import MdiFileDocumentCheckOutline from "~/ui/primitives/icons/mdi-file-document-check-outline.vue";

import Tooltip from "~/ui/primitives/tooltip/index.vue";

function handleSaveChanges() {
  FileState.files = FileState.files.map((file) => {
    if (file.id === FileState.activeFile?.id) {
      const modfied = { ...file, content: ToolState.editor!.getValue() };

      FileState.activeFile = modfied;

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
      :style="{ pointerEvents: FileState.activeFile?.name ? 'auto' : 'none' }"
      @click="handleSaveChanges"
    >
      <MdiFileDocumentCheckOutline />
    </button>
  </Tooltip>
</template>
