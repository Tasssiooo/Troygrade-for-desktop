<script setup lang="ts">
import {
  RosterRoot,
  RosterItem,
  RosterTrigger,
  RosterContent,
} from "./components/roster/";
import { roster_area } from "./styles";

const rosterItems = [
  {
    title: "troybins",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    title: "bins",
    content:
      "Yes. It's unstyled by default, giving you freedom over the look and feel.",
  },
];
</script>

<template>
  <div :class="roster_area">
    <RosterRoot type="multiple">
      <template v-for="item in rosterItems" :key="item.title">
        <RosterItem :value="item.title">
          <RosterTrigger>{{ item.title }}</RosterTrigger>
          <RosterContent>
            <div class="px-5 py-4">
              {{ item.content }}
            </div>
          </RosterContent>
        </RosterItem>
      </template>
    </RosterRoot>
  </div>
</template>
