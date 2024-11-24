<script setup lang="ts">
import {
  container,
  wrapper,
  border_right,
  border_left,
  border_top,
  border_bottom,
} from "./styles";

import Actions from "./actions/index.vue";
import Editor from "./editor/index.vue";
</script>

<template>
  <div :class="container">
    <div :class="wrapper">
      <div :class="border_right" />
      <div :class="border_left" />
      <div :class="border_top" />
      <div :class="border_bottom" />
      <Actions />
      <Editor />
    </div>
  </div>
</template>
