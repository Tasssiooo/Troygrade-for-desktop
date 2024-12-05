<script setup lang="ts">
import { container, input_area, checkbox_area, button_area } from "./styles";

import { button } from "~/styled-system/recipes";

import Input from "./components/input/index.vue";
import Checkbox from "~/ui/primitives/checkbox/index.vue";
</script>

<template>
  <div :class="container">
    <div :class="input_area">
      <Input
        label="Assets path"
        help="In bin format, this will be the path for textures, models, etc."
      />
      <Input
        label="File path"
        help='In bin format, every particle has a link that is followed by "VfxSystemDefinitionData", that link is similar to a path.'
      />
    </div>
    <div :class="checkbox_area">
      <Checkbox label='Only show property names in "Unknown Hashes" section' />
      <Checkbox label="Update file types used in properties with assets" />
      <Checkbox label="Set this configuration for all files" />
    </div>
    <div :class="button_area">
      <button :class="button({ visual: 'dialog' })">Previous</button>
      <button :class="button({ visual: 'dialog' })">Convert</button>
      <button :class="button({ visual: 'dialog' })">Next</button>
    </div>
  </div>
</template>
