<script setup lang="ts">
import { watch } from "vue";

import { container } from "./styles";

import {fm, tm } from "~/stores/index";

import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/ayu-dark.css";
import "codemirror/mode/toml/toml";
import "codemirror/mode/python/python";

watch(
  () => fm.active,
  (newActive) => {
    if (newActive) {
      // Avoid rendering multiple times as it creates multiple instances
      if (!tm.editor) {
        tm.editor = CodeMirror.fromTextArea(
          document.getElementById("editor") as HTMLTextAreaElement,
          {
            lineNumbers: true,
            theme: "ayu-dark",
          },
        );
      }

      tm.editor.setValue(newActive.content as string);
      tm.editor.setOption(
        "mode",
        newActive.type === "CONV_TROYBIN" ? "toml" : "python",
      );
    } else {
      tm.editor?.toTextArea();
      tm.editor = null;
    }
  },
);
</script>

<template>
  <div :class="container">
    <textarea id="editor" hidden />
  </div>
</template>
