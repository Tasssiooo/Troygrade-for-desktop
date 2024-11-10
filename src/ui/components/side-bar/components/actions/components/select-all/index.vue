<script setup lang="ts">
import { ToolbarToggleGroup, ToolbarToggleItem } from "radix-vue";
import { toggle } from "../../../../../../../../styled-system/recipes";
import { group, item } from "./styles.ts";
</script>

<template>
  <ToolbarToggleGroup :class="group" type="single">
    <ToolbarToggleItem :class="item + ' group'" value="_">
      <div :class="toggle({ turned: 'off' })" /> Select All
    </ToolbarToggleItem>
  </ToolbarToggleGroup>
</template>
