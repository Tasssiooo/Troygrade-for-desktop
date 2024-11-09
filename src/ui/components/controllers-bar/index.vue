<script setup lang="ts">
import { drag_area, controllers_wrapper, controllers_area } from "./styles.ts";
import { button } from "../../../../styled-system/recipes";

import { getCurrentWindow } from "@tauri-apps/api/window";

async function help() {
  //todo
}

async function hide() {
  await getCurrentWindow().minimize();
}

async function close() {
  await getCurrentWindow().close();
}
</script>

<template>
  <div data-tauri-drag-region :class="drag_area">
    <div :class="controllers_wrapper">
      <div :class="controllers_area">
        <button
          :class="button({ visual: 'mask', mask: 'help' })"
          @click="help"
        ></button>
        <button
          :class="button({ visual: 'mask', mask: 'hide' })"
          @click="hide"
        ></button>
        <button
          :class="button({ visual: 'mask', mask: 'close' })"
          @click="close"
        ></button>
      </div>
    </div>
  </div>
</template>
