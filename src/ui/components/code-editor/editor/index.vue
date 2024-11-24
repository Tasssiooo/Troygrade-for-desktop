<script setup lang="ts">
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/ayu-dark.css";
import "codemirror/mode/toml/toml";
import "codemirror/mode/python/python";

import { watch } from "vue";

import { container } from "./styles";

import appState from "../../../../states";

watch(
  () => appState.activeFile,
  (newFile) => {
    if (newFile) {
      // Avoid rendering multiple times as it creates multiple instances
      if (!appState.editor) {
        appState.editor = CodeMirror.fromTextArea(
          document.getElementById("editor") as HTMLTextAreaElement,
          {
            lineNumbers: true,
            theme: "ayu-dark",
          },
        );
      }

      appState.editor.setValue(newFile.content as string);
      appState.editor.setOption(
        "mode",
        newFile.type === "CONV_TROYBIN" ? "toml" : "python",
      );
    } else {
      appState.editor?.toTextArea();
      appState.editor = null;
    }
  },
);
</script>

<template>
  <div :class="container">
    <textarea id="editor" hidden />
  </div>
</template>
