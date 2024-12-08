<script setup lang="ts">
import { ToolbarButton } from "radix-vue";

import { button } from "~/styled-system/recipes";

import { handleLoadFiles } from "~/lib/handlers";

import Tooltip from "~/ui/primitives/tooltip/index.vue";
</script>

<template>
  <Tooltip content="Add files" side="bottom" :side-offset="-5">
    <ToolbarButton
      :class="button({ visual: 'mask', mask: 'add' })"
      @click="handleLoadFiles()"
    />
  </Tooltip>
</template>
