<script setup lang="ts">
import { AvatarImage, AvatarRoot } from "radix-vue";
import { root, ring, image } from "./styles.ts";
import logo from "../../../../../../../assets/images/troygrade-icon.png";
</script>

<template>
  <AvatarRoot :class="root">
    <span :class="ring" />
    <AvatarImage :class="image" :src="logo" alt="Troygrade logo" />
  </AvatarRoot>
</template>
