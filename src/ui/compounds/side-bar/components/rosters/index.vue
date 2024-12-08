<script setup lang="ts">
import {
  RosterRoot,
  RosterItem,
  RosterTrigger,
  RosterContent,
} from "~/ui/primitives/roster";

import { css } from "~/styled-system/css";

import { roster_area, roster_root, roster_item } from "./styles";

import { ref, watch } from "vue";

import { fm } from "~/stores/index";

import Item from "./components/item/index.vue";

const items = ref<string[]>([]);

/* Watches the files state and opens the rosters automatically if there is any file or closes if there is none. */
watch(
  () => fm.all.length,
  () => {
    const areThereTroys = fm.all.find((file) => file.type === "CONV_TROYBIN");
    const areThereBins = fm.all.find((file) => file.type === "MIG_BIN");

    if (areThereTroys) {
      if (!items.value.includes("troybins")) {
        items.value.push("troybins");
      }
    } else {
      items.value = areThereBins ? ["bins"] : [];
    }
    if (areThereBins) {
      if (!items.value.includes("bins")) {
        items.value.push("bins");
      }
    } else {
      items.value = areThereTroys ? ["troybins"] : [];
    }
  },
);
</script>

<template>
  <div :class="roster_area">
    <RosterRoot
      type="multiple"
      v-model:modelValue="items"
      :onUpdate:modelValue="(v) => (items = v as string[])"
      :class="roster_root"
    >
      <RosterItem value="troybins" :class="roster_item">
        <RosterTrigger>Troybins</RosterTrigger>
        <RosterContent>
          <Item type="troybin" />
        </RosterContent>
      </RosterItem>
      <RosterItem value="bins" :class="roster_item">
        <RosterTrigger>Bins</RosterTrigger>
        <RosterContent>
          <Item type="bin" />
        </RosterContent>
      </RosterItem>
    </RosterRoot>
  </div>
</template>
