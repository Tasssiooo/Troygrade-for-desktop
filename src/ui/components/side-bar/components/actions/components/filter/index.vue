<script setup lang="ts">
import { ToolbarButton } from "radix-vue";

import { button } from "../../../../../../../../styled-system/recipes";

import appState from "../../../../../../../states";
</script>

<template>
  <ToolbarButton
    :class="button({ visual: 'mask', mask: 'filter' })"
    @click="() => (appState.filter.show = !appState.filter.show)"
  />
</template>
