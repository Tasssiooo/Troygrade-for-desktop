<script setup lang="ts">
import { DialogTitle } from "radix-vue";

import { title } from "./styles";
</script>

<template>
  <DialogTitle :class="title">
    <slot />
  </DialogTitle>
</template>
