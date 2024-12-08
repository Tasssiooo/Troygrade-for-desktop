<script setup lang="ts">
import { drag_area, controllers_wrapper, controllers_area } from "./styles.ts";

import { button } from "~/styled-system/recipes/index";

import {
  getCurrentWebviewWindow,
  WebviewWindow,
} from "@tauri-apps/api/webviewWindow";

async function help() {
  new WebviewWindow("help", {
    title: "How to use Troygrade",
    decorations: false,
    minWidth: 512,
    width: 1024,
    minHeight: 256,
    url: "#/help",
  });
}

async function hide() {
  await getCurrentWebviewWindow().minimize();
}

async function close() {
  await getCurrentWebviewWindow().close();
}
</script>

<template>
  <div data-tauri-drag-region :class="drag_area">
    <div :class="controllers_wrapper">
      <div :class="controllers_area">
        <button
          v-if="getCurrentWebviewWindow().label !== 'help'"
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
