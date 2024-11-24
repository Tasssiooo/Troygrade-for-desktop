<script setup lang="ts">
import { Toaster } from "vue-sonner";
import { toast, description, close_button, error_icon } from "./styles";

import MdiError from "../icons/mdi-error.vue";
</script>

<template>
  <Toaster
    close-button
    :toast-options="{
      unstyled: true,
      classes: {
        toast,
        description,
        closeButton: close_button,
      },
    }"
    :duration="3500"
    :visibleToasts="5"
  >
    <template #error-icon>
      <MdiError :class="error_icon" />
    </template>
  </Toaster>
</template>
