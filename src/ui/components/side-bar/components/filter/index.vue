<script setup lang="ts">
import { filter_area, filter, label } from "./styles";
</script>

<template>
  <div :class="filter_area">
    <label :class="label" for="filter" />
    <input id="filter" type="search" name="filter" placeholder="Filter" autocomplete="off" :class="filter" />
  </div>
</template>
