<script setup lang="ts">
import { ToolbarToggleGroup, ToolbarToggleItem } from "radix-vue";

import { toggle } from "~/styled-system/recipes/index";

import { group, item } from "./styles.ts";

import { FileState } from "~/states/index";

function handleSelectAll() {
  if (FileState.selectedFiles.length !== FileState.files.length) {
    FileState.selectedFiles = [...FileState.files];
  } else {
    FileState.selectedFiles = [];
  }
}
</script>

<template>
  <ToolbarToggleGroup
    :class="group"
    type="single"
    :onUpdate:modelValue="handleSelectAll"
  >
    <ToolbarToggleItem :class="item + ' group'" value="_">
      <div
        :class="
          toggle({
            turned:
              FileState.files.length &&
              FileState.files.length === FileState.selectedFiles.length
                ? 'on'
                : 'off',
          })
        "
      />
      Select All
    </ToolbarToggleItem>
  </ToolbarToggleGroup>
</template>
