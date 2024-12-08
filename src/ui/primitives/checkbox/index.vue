<script setup lang="ts">
import { useId } from "vue";

import { CheckboxRoot, CheckboxIndicator, CheckboxRootProps, CheckboxRootEmits } from "radix-vue";

import { wrapper, root, indicator } from "./styles.ts";

interface Props extends CheckboxRootProps {
  label: string;
}

const props = defineProps<Props>();
const model = defineModel<boolean>();
const id = useId();
</script>

<template>
  <label :htmlFor="id" :class="wrapper + 'group'">
    <CheckboxRoot v-bind="{ ...props, id, class: root }" v-model:checked="model">
      <CheckboxIndicator :class="indicator" />
    </CheckboxRoot>
    <div>{{ label }}</div>
  </label>
</template>
