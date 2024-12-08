<script setup lang="ts">
import { computed } from "vue";

import {
  list,
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

import { fm, tm } from "~/stores/index";

import MdiCheckboxMarkedCircle from "~/ui/primitives/icons/mdi-checkbox-marked-circle.vue";

import oldIcon from "~/assets/images/heimerdinger_circle_old.png";
import newIcon from "~/assets/images/heimerdinger_circle_new.png";

const props = defineProps<{
  type: "troybin" | "bin";
}>();

const files = computed(() => {
  return fm.all.filter((file) =>
    props.type === "troybin"
      ? file.type === "CONV_TROYBIN"
      : file.type === "MIG_BIN",
  );
});

const filteredFiles = computed(() => {
  return tm.filter.value && tm.filter.show
    ? files.value.filter((file) =>
        file.name.toLocaleLowerCase().includes(tm.filter.value.toLowerCase()),
      )
    : files.value;
});
</script>

<template>
  <ul v-if="files.length" :class="list">
    <template v-for="file in filteredFiles" :key="file.id">
      <li
        @click="fm.updateActive(file.id)"
        :data-state="fm.active?.id === file.id ? 'checked' : 'unchecked'"
        :class="container"
      >
        <div
          :class="checkbox_container"
          @click.capture="fm.toggleSelect(file.id)"
        >
          <div :class="checkbox">
            <MdiCheckboxMarkedCircle
              :class="icon"
              v-if="fm.selected.includes(file.id)"
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
            :data-state="fm.active?.id === file.id ? 'checked' : 'unchecked'"
          >
            {{ file.name }}
          </span>
          <span
            :class="filetype"
            :data-state="fm.active?.id === file.id ? 'checked' : 'unchecked'"
          >
            {{ file.type.replace("_", ". ") }}
          </span>
        </div>
      </li>
    </template>
  </ul>
</template>
