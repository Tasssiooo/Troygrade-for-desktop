<script setup lang="ts">
import { DropdownMenuItem } from "radix-vue";

import { item } from "./styles";
</script>

<template>
  <DropdownMenuItem :class="item">
    <slot />
  </DropdownMenuItem>
</template>
