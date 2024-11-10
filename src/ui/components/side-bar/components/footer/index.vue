<script setup lang="ts">
import { getVersion } from "@tauri-apps/api/app";
import { onMounted, ref } from "vue";

import { button } from "../../../../../../styled-system/recipes";
import { footer, anchor_wrapper, app_version } from "./styles.ts";

import MdiGithub from "../../../icons/mdi-github.vue";
import MdiBug from "../../../icons/mdi-bug.vue";

import About from "./components/about/index.vue";

const version = ref("");

onMounted(async () => {
  const result = await getVersion();
  version.value = result;
});
</script>

<template>
  <div :class="footer">
    <div :class="anchor_wrapper">
      <a
        :class="button({ visual: 'square' })"
        href="https://github.com/Tasssiooo/Troygrade-for-desktop/issues"
        rel="noreferrer external"
        target="_blank"
      >
        <MdiBug />
      </a>
      <a
        :class="button({ visual: 'square' })"
        href="https://github.com/Tasssiooo/Troygrade-for-desktop"
        rel="noreferrer external"
        target="_blank"
      >
        <MdiGithub />
      </a>
    </div>
    <div :class="app_version">v{{ version }}</div>
    <About />
  </div>
</template>
