<script setup lang="ts">
import { ref } from "vue";

import { button } from "~/styled-system/recipes";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "~/ui/primitives/dropdown-menu";

import { fm } from "~/stores/index";

import Fix from "./components/fix/index.vue";
import SaveOnDisk from "./components/save-on-disk/index.vue";
import Delete from "./components/delete/index.vue";

import Tooltip from "~/ui/primitives/tooltip/index.vue";

const openFix = ref(false);
const openDelete = ref(false);
</script>

<template>
  <Tooltip content="Batch actions" side="bottom" :side-offset="-5">
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <button
          v-if="fm.selected.length > 1"
          :class="button({ visual: 'mask', mask: 'batch' })"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem @click="() => (openFix = true)">Fix</DropdownMenuItem>
        <SaveOnDisk />
        <DropdownMenuItem @click="() => (openDelete = true)"
          >Delete</DropdownMenuItem
        >
      </DropdownMenuContent>
      <!-- These are dialogs -->
      <Fix :update-open="(v) => (openFix = v)" :open="openFix" />
      <Delete :update-open="(v) => (openDelete = v)" :open="openDelete" />
    </DropdownMenu>
  </Tooltip>
</template>
