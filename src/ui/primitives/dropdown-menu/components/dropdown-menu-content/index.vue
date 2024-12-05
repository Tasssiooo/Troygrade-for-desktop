<script setup lang="ts">
import {
  DropdownMenuContent,
  DropdownMenuContentProps,
  DropdownMenuPortal,
} from "radix-vue";

import { content } from "./styles";

const props = defineProps<DropdownMenuContentProps>();
</script>

<template>
  <DropdownMenuPortal>
    <DropdownMenuContent :class="content" v-bind:="props">
      <slot />
    </DropdownMenuContent>
  </DropdownMenuPortal>
</template>
