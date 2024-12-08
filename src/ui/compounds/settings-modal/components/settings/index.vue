<script setup lang="ts">
import { ref, Ref, inject, onUnmounted } from "vue";

import { container, input_area, checkbox_area, button_area } from "./styles";

import { button } from "~/styled-system/recipes";

import { fm, mm } from "~/stores/index";

import { handleConvertFile } from "~/lib/handlers";

import Input from "./components/input/index.vue";
import Checkbox from "~/ui/primitives/checkbox/index.vue";

const currentIndex =
  inject<Ref<number | undefined, number | undefined>>("current_index");

const settings = ref<
  {
    assetsPath: string;
    filePath: string;
    namesOnly: boolean;
    updateFileTypes: boolean;
    setAll: boolean;
  }[]
>([
  {
    assetsPath: "ASSETS/Characters/[character name]/Skins/[skin]/Particles",
    filePath: "Characters/[character name]/Skins/[skin number]/Particles",
    namesOnly: false,
    updateFileTypes: true,
    setAll: false,
  },
]);

function handlePrevious() {
  if (currentIndex?.value !== undefined && currentIndex.value > 0) {
    currentIndex.value--;
  }
}

function handleConvert() {
  if (mm.settings.method === "single") {
    if (fm.active) {
      handleConvertFile(fm.active, settings.value[0]);
      mm.openSettings(false);
    }
  } else {
    let allIndex = -1;

    fm.selected.forEach((id, index) => {
      const entryIndex = fm.findEntry(fm.all, id, 0, fm.all.length);
      const entry = fm.all[entryIndex];

      if (settings.value[index]) {
        console.log("settings.value[index]: true - " + index);
        /* 
          If the setting exists, it will check if (setAll = true),
        if so it will save the index of the setting for repeating it to all entries,
        and it will delete the following the setting objects. 
        Range: index + 1 until length - index - 1;
      */
        if (settings.value[index].setAll) {
          console.log("settings.value[index].setAll: true - " + index);
          allIndex = index;
          settings.value.splice(index + 1, settings.value.length - index - 1);
        }
        handleConvertFile(entry, settings.value[index]);
      } else if (allIndex >= 0) {
        console.log("allIndex >= 0: true - " + index);
        /* 
          If there is an index for all, it will repeat the same setting for all
        entries from now on.
      */
        handleConvertFile(entry, settings.value[allIndex]);
      } else {
        console.log("else - " + index);
        /* 
          If there is no settings anymore, it will use the default value.
      */
        handleConvertFile(entry);
      }
    });
    mm.openSettings(false);
    mm.settings.method = "single";
    fm.emptySelected();
  }
}

function handleNext() {
  if (
    currentIndex?.value !== undefined &&
    currentIndex.value < fm.selected.length - 1 &&
    !settings.value[currentIndex.value].setAll
  ) {
    currentIndex.value++;
  }

  if (
    currentIndex?.value !== undefined &&
    !settings.value[currentIndex.value]
  ) {
    settings.value.push({
      assetsPath: "ASSETS/Characters/[character name]/Skins/[skin]/Particles",
      filePath: "Characters/[character name]/Skins/[skin number]/Particles",
      namesOnly: false,
      updateFileTypes: true,
      setAll: false,
    });
  }
}

onUnmounted(() => {
  if (currentIndex?.value) {
    currentIndex.value = 0;
  }
});
</script>

<template>
  <div :class="container">
    <div :class="input_area">
      <Input
        label="Assets path"
        help="In bin format, this will be the path for textures, models, etc."
        v-model="settings[currentIndex || 0].assetsPath"
      />
      <Input
        label="File path"
        help='In bin format, every particle has a link that is followed by "VfxSystemDefinitionData", that link is similar to a path.'
        v-model="settings[currentIndex || 0].filePath"
      />
    </div>
    <div :class="checkbox_area">
      <Checkbox
        label='Only show property names in "Unknown Hashes" section'
        v-model="settings[currentIndex || 0].namesOnly"
      />
      <Checkbox
        label="Update file types used in properties with assets"
        v-model="settings[currentIndex || 0].updateFileTypes"
      />
      <Checkbox
        label="Set this setting for this file until the last"
        v-model="settings[currentIndex || 0].setAll"
      />
    </div>
    <div :class="button_area">
      <button
        :class="button({ visual: 'dialog' })"
        :style="{
          pointerEvents: mm.settings.method === 'single' ? 'none' : 'auto',
        }"
        @click="handlePrevious()"
      >
        Previous
      </button>
      <button :class="button({ visual: 'dialog' })" @click="handleConvert()">
        Convert
      </button>
      <button
        :class="button({ visual: 'dialog' })"
        :style="{
          pointerEvents: mm.settings.method === 'single' ? 'none' : 'auto',
        }"
        @click="handleNext()"
      >
        Next
      </button>
    </div>
  </div>
</template>
