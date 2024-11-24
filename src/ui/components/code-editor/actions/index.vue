<script setup lang="ts">
import { container, filename, buttons_container } from "./styles";

import Delete from "./components/delete/index.vue";
import SaveOnDisk from "./components/save-on-disk/index.vue";
import Fix from "./components/fix/index.vue";
import SaveChanges from "./components/save-changes/index.vue";

import appState from "../../../../states";
</script>

<template>
  <div :class="container">
    <div :class="filename">{{ appState.activeFile?.name }}</div>
    <div :class="buttons_container">
      <Delete />
      <SaveOnDisk />
      <Fix />
      <SaveChanges />
    </div>
  </div>
</template>
