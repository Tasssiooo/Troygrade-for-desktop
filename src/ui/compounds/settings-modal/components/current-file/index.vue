<script setup lang="ts">
import { computed, inject } from "vue";

import { container, header, info } from "./styles";

import { FileState, ModalState } from "~/states/index";

const currentEntryId: any = inject("currentEntry");

const currentEntry = computed(() => {
  console.log(currentEntryId);
  return FileState.files.find((file) => file.id === currentEntryId.value)
});

const currentPos = computed(() => {
  if (ModalState.settings.method === "single") {
    return "1/1";
  } else {
    const cp = FileState.selectedFiles.indexOf(currentEntryId.value) + 1;
    return `${cp}/${FileState.selectedFiles.length}`;
  }
});
</script>

<template>
  <div :class="container">
    <div :class="header">Current file</div>
    <ul :class="info">
      <li>Name: {{ currentEntry?.name }}</li>
      <li>Type: {{ currentEntry?.type }}</li>
      <li>Position: {{ currentPos }}</li>
    </ul>
  </div>
</template>
