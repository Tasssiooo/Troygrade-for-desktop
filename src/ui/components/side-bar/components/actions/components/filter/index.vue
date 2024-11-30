<script setup lang="ts">
import { ToolbarButton } from "radix-vue";

import { button } from "../../../../../../../../styled-system/recipes";

import appState from "../../../../../../../states";

import Tooltip from "../../../../../tooltip/index.vue";
</script>

<template>
  <Tooltip content="Filter" side="bottom" :side-offset="-5">
    <ToolbarButton
      :class="button({ visual: 'mask', mask: 'filter' })"
      @click="() => (appState.filter.show = !appState.filter.show)"
    />
  </Tooltip>
</template>
