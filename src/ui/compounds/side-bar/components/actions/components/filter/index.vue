<script setup lang="ts">
import { ToolbarButton } from "radix-vue";

import { button } from "~/styled-system/recipes";

import { ToolState } from "~/states/index";

import Tooltip from "~/ui/primitives/tooltip/index.vue";
</script>

<template>
  <Tooltip content="Filter" side="bottom" :side-offset="-5">
    <ToolbarButton
      :class="button({ visual: 'mask', mask: 'filter' })"
      @click="() => (ToolState.filter.show = !ToolState.filter.show)"
    />
  </Tooltip>
</template>
