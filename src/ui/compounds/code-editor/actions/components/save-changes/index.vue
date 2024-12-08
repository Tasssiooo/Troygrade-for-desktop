<script setup lang="ts">
import { button } from "~/styled-system/recipes";

import {fm} from "~/stores/index";

import MdiFileDocumentCheckOutline from "~/ui/primitives/icons/mdi-file-document-check-outline.vue";
import Tooltip from "~/ui/primitives/tooltip/index.vue";
</script>

<template>
  <Tooltip content="Save editor changes" side="bottom">
    <button
      :class="button({ visual: 'square' })"
      :style="{ pointerEvents: fm.active?.name ? 'auto' : 'none' }"
      @click="fm.saveChanges()"
    >
      <MdiFileDocumentCheckOutline />
    </button>
  </Tooltip>
</template>
