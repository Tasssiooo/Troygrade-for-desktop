<script setup lang="ts">
import {
  DialogContent,
  DialogPortal,
  DialogOverlay,
  DialogClose,
} from "radix-vue";

import {
  overlay,
  content,
  close,
  close_border,
  inner_bg,
  x_icon,
} from "./styles";
</script>

<template>
  <DialogPortal>
    <DialogOverlay :class="overlay" />
    <DialogContent :class="content">
      <slot />
      <DialogClose :class="close">
        <div :class="close_border + ' group'">
          <div :class="inner_bg">
            <div :class="x_icon" />
          </div>
        </div>
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>
