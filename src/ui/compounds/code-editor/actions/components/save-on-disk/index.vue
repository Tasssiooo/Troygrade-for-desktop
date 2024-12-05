<script setup lang="ts">
import { button } from "~/styled-system/recipes";

import { save } from "@tauri-apps/plugin-dialog";
import { BaseDirectory, writeTextFile } from "@tauri-apps/plugin-fs";

import { toast } from "vue-sonner";

import { FileState } from "~/states/index";

import MdiContentSaveOutline from "~/ui/primitives/icons/mdi-content-save-outline.vue";

import Tooltip from "~/ui/primitives/tooltip/index.vue";

async function handleSaveOnDisk() {
  const outpath = await save({
    title: "Save file as plain text",
    defaultPath: `${FileState.activeFile?.name}.txt`,
    filters: [
      {
        name: "Text",
        extensions: ["txt", "troy"],
      },
    ],
  });

  if (outpath) {
    try {
      await writeTextFile(outpath, FileState.activeFile?.content as string, {
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
  <Tooltip content="Save on disk" side="bottom">
    <button
      :class="button({ visual: 'square' })"
      :style="{ pointerEvents: FileState.activeFile?.name ? 'auto' : 'none' }"
      @click="handleSaveOnDisk"
    >
      <MdiContentSaveOutline />
    </button>
  </Tooltip>
</template>
