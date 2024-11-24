<script setup lang="ts">
//@ts-ignore
import { useId, computed } from "vue";

import {
  container,
  checkbox,
  checkbox_container,
  checkbox_border,
  info_container,
  icon,
  heimer_img,
  filename,
  filetype,
} from "./styles";

import appState from "../../../../../../../states";

import MdiCheckboxMarkedCircle from "../../../../../icons/mdi-checkbox-marked-circle.vue";

import oldIcon from "../../../../../../../assets/images/heimerdinger_circle_old.png";
import newIcon from "../../../../../../../assets/images/heimerdinger_circle_new.png";

const props = defineProps<{
  type: "troybin" | "bin";
}>();

const files = computed(() => {
  return appState.files.filter((file) =>
    props.type === "troybin"
      ? file.type === "CONV_TROYBIN"
      : file.type === "MIG_BIN",
  );
});

const filteredFiles = computed(() => {
  return appState.filter.value && appState.filter.show
    ? files.value.filter((file) =>
        file.name
          .toLocaleLowerCase()
          .includes(appState.filter.value.toLowerCase()),
      )
    : files.value;
});

function handleSelectFile(fid: string) {
  if (appState.selectedFiles.includes(fid)) {
    appState.selectedFiles = appState.selectedFiles.filter((id) => id !== fid);
  } else {
    appState.selectedFiles = [...appState.selectedFiles, fid];
  }
}
</script>

<template>
  <ul v-if="files.length">
    <template v-for="file in filteredFiles" :key="useId()">
      <li
        @click="appState.activeFile = file"
        :data-state="
          appState.activeFile?.id === file.id ? 'checked' : 'unchecked'
        "
        :class="container"
      >
        <div :class="checkbox_container" @click="handleSelectFile(file.id)">
          <div :class="checkbox">
            <MdiCheckboxMarkedCircle
              :class="icon"
              v-if="appState.selectedFiles.includes(file.id)"
            />
            <img
              v-else
              :src="props.type === 'troybin' ? oldIcon : newIcon"
              :class="heimer_img"
            />
            <div :class="checkbox_border" />
          </div>
        </div>
        <div :class="info_container">
          <span
            :class="filename"
            :data-state="
              appState.activeFile?.id === file.id ? 'checked' : 'unchecked'
            "
          >
            {{ file.name }}
          </span>
          <span
            :class="filetype"
            :data-state="
              appState.activeFile?.id === file.id ? 'checked' : 'unchecked'
            "
          >
            {{ file.type.replace("_", ". ") }}
          </span>
        </div>
      </li>
    </template>
  </ul>
</template>
