<script setup lang="ts">
import { watch } from "vue";

import { container } from "./styles";

import { FileState, ToolState } from "~/states/index";

import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/ayu-dark.css";
import "codemirror/mode/toml/toml";
import "codemirror/mode/python/python";

watch(
  () => FileState.activeFile,
  (newFile) => {
    if (newFile) {
      // Avoid rendering multiple times as it creates multiple instances
      if (!ToolState.editor) {
        ToolState.editor = CodeMirror.fromTextArea(
          document.getElementById("editor") as HTMLTextAreaElement,
          {
            lineNumbers: true,
            theme: "ayu-dark",
          },
        );
      }

      ToolState.editor.setValue(newFile.content as string);
      ToolState.editor.setOption(
        "mode",
        newFile.type === "CONV_TROYBIN" ? "toml" : "python",
      );
    } else {
      ToolState.editor?.toTextArea();
      ToolState.editor = null;
    }
  },
);
</script>

<template>
  <div :class="container">
    <textarea id="editor" hidden />
  </div>
</template>
