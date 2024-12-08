<script setup lang="ts">
import { filter_area, filter, label } from "./styles";

import { tm } from "~/stores/index";
</script>

<template>
  <div v-if="tm.filter.show" :class="filter_area">
    <label :class="label" for="filter" />
    <input
      id="filter"
      type="search"
      name="filter"
      placeholder="Filter"
      autocomplete="off"
      v-model="tm.filter.value"
      :class="filter"
      @change="
        (e) => tm.updateFilterValue((e.target as HTMLTextAreaElement).value)
      "
      @blur="tm.showFilter(false)"
    />
  </div>
</template>
