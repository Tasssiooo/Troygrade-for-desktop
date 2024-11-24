<script setup lang="ts">
import { DropdownMenuItem } from "../../../../../../../dropdown-menu";

import { toast } from "vue-sonner";

import { open } from "@tauri-apps/plugin-dialog";
import { BaseDirectory, writeTextFile } from "@tauri-apps/plugin-fs";

import appState from "../../../../../../../../../states";

async function handleSaveOnDiskBatch() {
  const outpath = await open({
    title: "Save files as plain text",
    directory: true,
  });

  if (outpath) {
    appState.selectedFiles.forEach(async (id) => {
      try {
        const file = appState.files.find((file) => file.id === id);

        await writeTextFile(
          `${outpath}/${file?.name}.txt`,
          file?.content as string,
          {
            baseDir: BaseDirectory.Home,
          },
        );

        toast("Done!", {
          description: `The file in the path "${outpath}" has been created and written successfully!`,
        });
      } catch (err: any) {
        toast.error(`Error: ${outpath}`, {
          description: err.message,
        });
      }
    });

    appState.selectedFiles = [];
  }
}
</script>

<template>
  <DropdownMenuItem @click="handleSaveOnDiskBatch">
    Save on disk
  </DropdownMenuItem>
</template>
