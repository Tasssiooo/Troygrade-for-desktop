<script setup lang="ts">
import ControllersBar from "./ui/components/controllers-bar/index.vue";
import SideBar from "./ui/components/side-bar/index.vue";
import Toaster from "./ui/components/toaster/index.vue";
</script>

<template>
  <ControllersBar />
  <main>
    <SideBar />
    <Toaster />
  </main>
</template>
