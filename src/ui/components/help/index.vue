<script setup lang="ts">
import { css } from "../../../../styled-system/css";
</script>

<template>
  <div
    :class="
      css({
        display: 'flex',
        justifyContent: 'center',
        p: '4',
        w: 'full',
        h: 'full',
      })
    "
  >
    <header :class="css({ fontSize: 'lg', mt: '4' })">
      <h1>How to use Troygrade</h1>
    </header>
  </div>
</template>
