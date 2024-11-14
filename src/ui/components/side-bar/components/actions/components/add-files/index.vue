<script setup lang="ts">
import { ToolbarButton } from "radix-vue";

import { button } from "../../../../../../../../styled-system/recipes";

import { handleLoadFiles } from "../../../../../../../lib/handlers";
</script>

<template>
  <ToolbarButton :class="button({ visual: 'mask', mask: 'add' })" @click="handleLoadFiles" />
</template>
