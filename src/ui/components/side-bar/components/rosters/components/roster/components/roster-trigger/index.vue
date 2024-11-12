<script setup lang="ts">
import { AccordionHeader, AccordionTrigger } from "radix-vue";
import { header, trigger, arrow } from "./styles";
</script>

<template>
  <AccordionHeader :class="header">
    <AccordionTrigger :class="trigger + ' group'">
      <div :class="arrow" />
      <slot />
    </AccordionTrigger>
  </AccordionHeader>
</template>
