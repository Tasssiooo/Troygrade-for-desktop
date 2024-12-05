<script setup lang="ts">
import {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalTitle,
} from "~/ui/primitives/modal/index";

import { button } from "~/styled-system/recipes/index";
import { about_text, anchor, authors } from "./styles.ts";

import MdiInformationSlabCircleOutline from "~/ui/primitives/icons/mdi-information-slab-circle-outline.vue";

import Tooltip from "~/ui/primitives/tooltip/index.vue";
</script>

<template>
  <Modal>
    <Tooltip content="About">
      <ModalTrigger as-child>
        <button :class="button({ visual: 'square' })">
          <MdiInformationSlabCircleOutline />
        </button>
      </ModalTrigger>
    </Tooltip>
    <ModalContent>
      <ModalTitle>About</ModalTitle>
      <div :class="about_text">
        <p>
          Troygrade is a tool created to help custom skin creators with bin
          files. Supports migrating troybin files, fixing outdated bin files and
          more to come in the future.
        </p>
        <p>
          If you encounter any bugs, you can let me know by opening an issue on
          the
          <a
            :class="anchor"
            href="https://github.com/Leischii/Leischii.github.io/issues"
            target="_blank"
            rel="noreferrer external"
          >
            Troygrade github issues page
          </a>
          .
        </p>
        <p>
          Troybin converter is a javascript port of
          <a
            :class="anchor"
            href="https://github.com/moonshadow565"
            rel="noreferrer external"
            target="_blank"
          >
            moonshadow565</a
          >
          troybin converter from
          <a
            :class="anchor"
            href="https://github.com/moonshadow565/lolpytools"
            rel="noreferrer external"
            target="_blank"
          >
            lol-pytools</a
          >.
        </p>
      </div>
      <div :class="authors">
        <p>
          <a
            :class="anchor"
            href="https://leischii.github.io/"
            rel="noreferrer external"
            target="_blank"
            >Troygrade</a
          >
          by
          <a
            :class="anchor"
            href="https://github.com/Leischii"
            rel="noreferrer external"
            target="_blank"
            >Leischii</a
          >
        </p>
        <p>
          Desktop port by
          <a
            :class="anchor"
            href="https://github.com/Tasssiooo/"
            rel="noreferrer external"
            target="_blank"
            >Tasssiooo</a
          >
        </p>
      </div>
    </ModalContent>
  </Modal>
</template>
