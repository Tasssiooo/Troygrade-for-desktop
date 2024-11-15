<script setup lang="ts">
import {
  RosterRoot,
  RosterItem,
  RosterTrigger,
  RosterContent,
} from "./components/roster";

import { roster_area } from "./styles";

import { ref, watch } from "vue";

import FileItem from "./components/file-item/index.vue";

import appState from "../../../../../states";

const model = ref<{ items: string[] }>({ items: [] });

/* Watches the files state and opens the rosters automatically if there is any file */
watch(appState.files, (newFiles) => {
  const areThereTroys = newFiles.find((file) => file.type === "CONV_TROYBIN");
  const areThereBins = newFiles.find((file) => file.type === "MIG_BIN");

  if (areThereTroys) {
    model.value.items = !model.value.items.includes("troybins")
      ? [...model.value.items, "troybins"]
      : model.value.items;
  }
  if (areThereBins) {
    model.value.items = !model.value.items.includes("bins")
      ? [...model.value.items, "bins"]
      : model.value.items;
  }
});
</script>

<template>
  <div :class="roster_area">
    <RosterRoot
      type="multiple"
      v-model:modelValue="model.items"
      :onUpdate:modelValue="(v) => (model.items = v as string[])"
    >
      <RosterItem value="troybins">
        <RosterTrigger>Troybins</RosterTrigger>
        <RosterContent>
          <FileItem type="troybin" />
        </RosterContent>
      </RosterItem>
      <RosterItem value="bins">
        <RosterTrigger>Bins</RosterTrigger>
        <RosterContent>
          <FileItem type="bin" />
        </RosterContent>
      </RosterItem>
    </RosterRoot>
  </div>
</template>
