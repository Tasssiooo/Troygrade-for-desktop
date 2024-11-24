<script setup lang="ts">
import { ref } from "vue";

import { button } from "../../../../../../../../styled-system/recipes";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../../../../../dropdown-menu";

import Fix from "./components/fix/index.vue";
import SaveOnDisk from "./components/save-on-disk/index.vue";
import Delete from "./components/delete/index.vue";
import appState from "../../../../../../../states";

const openFix = ref(false);
const openDelete = ref(false);
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <button
        v-if="appState.selectedFiles.length > 1"
        :class="button({ visual: 'mask', mask: 'batch' })"
      />
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start" :align-offset="5">
      <DropdownMenuItem @click="() => (openFix = true)">Fix</DropdownMenuItem>
      <SaveOnDisk />
      <DropdownMenuItem @click="() => (openDelete = true)">Delete</DropdownMenuItem>
    </DropdownMenuContent>
    <!-- These are dialogs -->
    <Fix :update-open="(v) => (openFix = v)" :open="openFix" />
    <Delete :update-open="(v) => (openDelete = v)" :open="openDelete" />
  </DropdownMenu>
</template>
