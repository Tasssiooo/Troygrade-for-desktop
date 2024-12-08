<script setup lang="ts">
import { title, screenshot } from "./styles";

const { num, text, img } = defineProps<{
  num: string;
  text: string;
  img: string;
}>();
</script>

<template>
  <section>
    <div :class="title">{{ num }} {{ text }}</div>
    <img :src="img" :class="screenshot" />
  </section>
</template>
