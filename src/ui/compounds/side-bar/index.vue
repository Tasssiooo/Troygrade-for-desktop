<script setup lang="ts">
import { section, section_wrapper } from "./styles.ts";

import Header from "./components/header/index.vue";
import Actions from "./components/actions/index.vue";
import Filter from "./components/filter/index.vue";
import Rosters from "./components/rosters/index.vue";
import Footer from "./components/footer/index.vue";
</script>

<template>
  <section :class="section">
    <div :class="section_wrapper">
      <Header />
      <Actions />
      <Filter />
      <Rosters />
      <Footer />
    </div>
  </section>
</template>
