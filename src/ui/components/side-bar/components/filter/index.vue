<script setup lang="ts">
import { filter_area, filter, label } from "./styles";

import appState from "../../../../../states";

import { onUpdated } from "vue";

onUpdated(() => {
  document.getElementById("filter")?.focus();
});
</script>

<template>
  <div v-if="appState.filter.show" :class="filter_area">
    <label :class="label" for="filter" />
    <input
      id="filter"
      type="search"
      name="filter"
      placeholder="Filter"
      autocomplete="off"
      v-model="appState.filter.value"
      :class="filter"
      @change="
        /* Delete this (e.target as HTMLTextAreaElement) and make typescript cry. */
        (e) => (appState.filter.value = (e.target as HTMLTextAreaElement).value)
      "
      @blur="appState.filter.show = false"
    />
  </div>
</template>
