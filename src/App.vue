<script setup lang="ts">
import { RouterView } from "vue-router";

import ControllersBar from "./ui/compounds/controllers-bar/index.vue";
import Toaster from "./ui/primitives/toaster/index.vue";

if (!import.meta.env.DEV) {
  document.oncontextmenu = (event) => {
    event.preventDefault();
  };
}
</script>

<template>
  <ControllersBar />
  <main>
    <RouterView />
  </main>
  <Toaster />
</template>
