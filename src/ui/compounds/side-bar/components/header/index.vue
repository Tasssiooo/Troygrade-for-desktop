<script setup lang="ts">
import { header, header_wrapper } from "./styles.ts";

import Avatar from "./components/avatar/index.vue";
import Title from "./components/title/index.vue";
</script>

<template>
  <div :class="header">
    <div :class="header_wrapper">
      <Avatar />
      <Title />
    </div>
  </div>
</template>
