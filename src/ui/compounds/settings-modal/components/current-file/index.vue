<script setup lang="ts">
import { computed, inject, Ref } from "vue";

import { container, header, info } from "./styles";

import { fm, mm } from "~/stores/index";

const currentIndex =
  inject<Ref<number | undefined, number | undefined>>("current_index");

const queue = computed(() => {
  if (mm.settings.method === "single") {
    if (fm.active) {
      return [fm.active.id];
    }
  } else {
    return fm.selected;
  }
});

const currentEntry = computed(() => {
  if (
    currentIndex?.value !== undefined &&
    queue.value !== undefined &&
    queue.value[currentIndex.value] !== undefined
  ) {
    return fm.all[
      fm.findEntry(fm.all, queue.value[currentIndex.value], 0, fm.all.length)
    ];
  }
});

const currentPos = computed(() => {
  if (mm.settings.method === "single") {
    return "1/1";
  } else if (currentIndex?.value !== undefined) {
    return `${currentIndex.value + 1}/${fm.selected.length}`;
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
