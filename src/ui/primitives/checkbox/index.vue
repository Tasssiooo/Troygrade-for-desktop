<script setup lang="ts">
import { useId } from "vue";

import { CheckboxRoot, CheckboxIndicator } from "radix-vue";

import { wrapper, root, indicator } from "./styles.ts";

const { label } = defineProps<{
  label: string;
}>();

const id = useId();
</script>

<template>
  <label :htmlFor="id" :class="wrapper + 'group'">
    <CheckboxRoot :id="id" :class="root">
      <CheckboxIndicator :class="indicator" />
    </CheckboxRoot>
    <div>{{ label }}</div>
  </label>
</template>
