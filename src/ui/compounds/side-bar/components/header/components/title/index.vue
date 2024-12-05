<script setup lang="ts">
import { title, anchor, status_circle, author_name } from "./styles.ts";
</script>

<template>
  <div>
    <span :class="title">Troygrade</span>
    <a
      href="https://github.com/Leischii"
      target="_blank"
      rel="noreferrer noopener external"
      :class="anchor"
    >
      <span :class="status_circle" />
      <span :class="author_name">by Leischii</span>
    </a>
  </div>
</template>
