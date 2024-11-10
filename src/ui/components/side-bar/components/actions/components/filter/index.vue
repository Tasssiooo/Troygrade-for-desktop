<script setup lang="ts">
import { ToolbarButton } from "radix-vue";
import { button } from "../../../../../../../../styled-system/recipes";
</script>

<template>
  <ToolbarButton :class="button({ visual: 'mask', mask: 'filter' })" />
</template>
