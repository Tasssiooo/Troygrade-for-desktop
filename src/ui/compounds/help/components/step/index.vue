<script setup lang="ts">
import { css } from "~/styled-system/css";

const { num, text, img } = defineProps<{
  num: string;
  text: string;
  img: string;
}>();
</script>

<template>
  <section>
    <div :class="css({ textAlign: 'center' })">{{ num }}. {{ text }}</div>
    <img
      :src="img"
      :class="
        css({
          border: '2px solid',
          mx: 'auto',
          mt: '2.5',
          objectFit: 'cover',
          borderColor: { base: '#a07a30' },
        })
      "
    />
  </section>
</template>
