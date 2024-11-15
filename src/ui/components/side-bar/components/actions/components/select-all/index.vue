<script setup lang="ts">
import { ToolbarToggleGroup, ToolbarToggleItem } from "radix-vue";

import { toggle } from "../../../../../../../../styled-system/recipes";

import { group, item } from "./styles.ts";

import appState from "../../../../../../../states/index.ts";

function handleSelectAll() {
  if (appState.selectedFiles.length !== appState.files.length) {
    appState.selectedFiles = appState.files.map((file) => file.id);
  } else {
    appState.selectedFiles = [];
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
              appState.files.length &&
              appState.files.length === appState.selectedFiles.length
                ? 'on'
                : 'off',
          })
        "
      />
      Select All
    </ToolbarToggleItem>
  </ToolbarToggleGroup>
</template>
