<script setup lang="ts">
import {
  RosterRoot,
  RosterItem,
  RosterTrigger,
  RosterContent,
} from "./components/roster";

import { roster_area } from "./styles";

import { ref, watch } from "vue";

import { FileState } from "~/states/index";

import FileItem from "./components/file-item/index.vue";

const model = ref<string[]>([]);

/* Watches the files state and opens the rosters automatically if there is any file */
watch(
  () => FileState.files,
  (newFiles) => {
    const areThereTroys = newFiles.find((file) => file.type === "CONV_TROYBIN");
    const areThereBins = newFiles.find((file) => file.type === "MIG_BIN");

    if (areThereTroys) {
      model.value = !model.value.includes("troybins")
        ? [...model.value, "troybins"]
        : model.value;
    } else {
      model.value = areThereBins ? ["bins"] : [];
    }
    if (areThereBins) {
      model.value = !model.value.includes("bins")
        ? [...model.value, "bins"]
        : model.value;
    } else {
      model.value = areThereTroys ? ["troybins"] : [];
    }
  },
);
</script>

<template>
  <div :class="roster_area">
    <RosterRoot
      type="multiple"
      v-model:modelValue="model"
      :onUpdate:modelValue="(v) => (model = v as string[])"
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
