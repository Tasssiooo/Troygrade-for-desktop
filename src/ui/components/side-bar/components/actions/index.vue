<script setup lang="ts">
import { ToolbarRoot } from 'radix-vue';
import { actions_wrapper, buttons_wrapper } from "./styles.ts";

import SelectAll from "./components/select-all/index.vue";
import Filter from "./components/filter/index.vue";
import AddFiles from "./components/add-files/index.vue";
</script>

<template>
  <ToolbarRoot :class="actions_wrapper">
    <SelectAll />
    <div :class="buttons_wrapper">
      <Filter />
      <AddFiles />
    </div>
  </ToolbarRoot>
</template>
