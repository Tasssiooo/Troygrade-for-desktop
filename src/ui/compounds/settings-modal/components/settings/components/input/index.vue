<script setup lang="ts">
import { useId } from "vue";

import { input, input_wrapper, input_label_wrapper, edit } from "./styles";

import Tooltip from "~/ui/primitives/tooltip/index.vue";
import MdiHelpCircle from "~/ui/primitives/icons/mdi-help-circle.vue";

const props = defineProps<{ label: string; help: string }>();

const id = useId();
</script>

<template>
  <div>
    <div :class="input_label_wrapper">
      <span>{{ props.label }}</span>
      <Tooltip side="top" :content="props.help">
        <MdiHelpCircle />
      </Tooltip>
    </div>
    <div :class="input_wrapper">
      <input v-bind="{ ...props, id, type: 'text', class: input, }" />
      <label :htmlFor="id" :class="edit" />
    </div>
  </div>
</template>
