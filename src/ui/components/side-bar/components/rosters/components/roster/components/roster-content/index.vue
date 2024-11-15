<script setup lang="ts">
import { AccordionContent } from 'radix-vue';

import { content } from './styles';
</script>

<template>
  <AccordionContent :class="content">
    <slot />
  </AccordionContent>
</template>
