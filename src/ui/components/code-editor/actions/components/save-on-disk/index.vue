<script setup lang="ts">
import { button } from "../../../../../../../styled-system/recipes";

import { save } from "@tauri-apps/plugin-dialog";
import { BaseDirectory, writeTextFile } from "@tauri-apps/plugin-fs";

import { toast } from "vue-sonner";

import appState from "../../../../../../states";

import MdiContentSaveOutline from "../../../../icons/mdi-content-save-outline.vue";

async function handleSaveOnDisk() {
  const outpath = await save({
    title: "Save file as plain text",
    defaultPath: `${appState.activeFile?.name}.txt`,
    filters: [
      {
        name: "Text",
        extensions: ["txt", "troy"],
      },
    ],
  });

  if (outpath) {
    try {
      await writeTextFile(outpath, appState.activeFile?.content as string, {
        baseDir: BaseDirectory.Home,
      });

      /* Is this necessary?
      const content = await readFile(outpath, {
        baseDir: BaseDirectory.Home,
      });

      //Checks if the saving worked
      if (content.length) {
        toast("Done!", {
          description: `The file in the path \"${outpath}\" has been created and written successfully!`,
        });
      } */

      toast("Done!", {
        description: `The file in the path \"${outpath}\" has been created and written successfully!`,
      });
    } catch (err: any) {
      toast.error(`Error: ${outpath}`, {
        description: err.message,
      });
    }
  }
}
</script>

<template>
  <button
    :class="button({ visual: 'square' })"
    :style="{ pointerEvents: appState.activeFile?.name ? 'auto' : 'none' }"
    @click="handleSaveOnDisk"
  >
    <MdiContentSaveOutline />
  </button>
</template>
