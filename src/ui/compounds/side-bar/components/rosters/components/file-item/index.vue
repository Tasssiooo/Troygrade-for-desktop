<script setup lang="ts">
import { Entry } from "~/types/index";

import { computed } from "vue";

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

import { FileState, ToolState } from "~/states/index";

import MdiCheckboxMarkedCircle from "~/ui/primitives/icons/mdi-checkbox-marked-circle.vue";

import oldIcon from "~/assets/images/heimerdinger_circle_old.png";
import newIcon from "~/assets/images/heimerdinger_circle_new.png";

const props = defineProps<{
  type: "troybin" | "bin";
}>();

const files = computed(() => {
  return FileState.files.filter((file) =>
    props.type === "troybin"
      ? file.type === "CONV_TROYBIN"
      : file.type === "MIG_BIN",
  );
});

const filteredFiles = computed(() => {
  return ToolState.filter.value && ToolState.filter.show
    ? files.value.filter((file) =>
        file.name
          .toLocaleLowerCase()
          .includes(ToolState.filter.value.toLowerCase()),
      )
    : files.value;
});

function handleSelectFile(entry: Entry) {
  if (FileState.selectedFiles.includes(entry)) {
    FileState.selectedFiles = FileState.selectedFiles.filter(
      (file) => file.id !== entry.id,
    );
  } else {
    FileState.selectedFiles = [...FileState.selectedFiles, entry];
  }
}
</script>

<template>
  <ul v-if="files.length">
    <template v-for="file in filteredFiles" :key="file.id">
      <li
        @click="FileState.activeFile = file"
        :data-state="
          FileState.activeFile?.id === file.id ? 'checked' : 'unchecked'
        "
        :class="container"
      >
        <div
          :class="checkbox_container"
          @click.capture="handleSelectFile(file)"
        >
          <div :class="checkbox">
            <MdiCheckboxMarkedCircle
              :class="icon"
              v-if="FileState.selectedFiles.includes(file)"
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
              FileState.activeFile?.id === file.id ? 'checked' : 'unchecked'
            "
          >
            {{ file.name }}
          </span>
          <span
            :class="filetype"
            :data-state="
              FileState.activeFile?.id === file.id ? 'checked' : 'unchecked'
            "
          >
            {{ file.type.replace("_", ". ") }}
          </span>
        </div>
      </li>
    </template>
  </ul>
</template>
