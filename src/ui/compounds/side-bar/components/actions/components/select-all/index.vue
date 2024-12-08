<script setup lang="ts">
import { ToolbarToggleGroup, ToolbarToggleItem } from "radix-vue";

import { toggle } from "~/styled-system/recipes/index";

import { group, item } from "./styles.ts";

import { fm } from "~/stores/index";
</script>

<template>
  <ToolbarToggleGroup
    :class="group"
    type="single"
    :onUpdate:modelValue="() => fm.toggleSelectAll()"
  >
    <ToolbarToggleItem :class="item + ' group'" value="_">
      <div
        :class="
          toggle({
            turned:
              fm.all.length && fm.all.length === fm.selected.length
                ? 'on'
                : 'off',
          })
        "
      />
      Select All
    </ToolbarToggleItem>
  </ToolbarToggleGroup>
</template>
