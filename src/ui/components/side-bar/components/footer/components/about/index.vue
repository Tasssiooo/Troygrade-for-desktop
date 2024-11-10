<script setup lang="ts">
import {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalTitle,
} from "../../../../../modal";
import MdiInformationSlabCircleOutline from "../../../../../icons/mdi-information-slab-circle-outline.vue";
import { button } from "../../../../../../../../styled-system/recipes";
import { about_text, anchor } from "./styles.ts";
</script>

<template>
  <Modal>
    <ModalTrigger as-child>
      <button :class="button({ visual: 'square' })">
        <MdiInformationSlabCircleOutline />
      </button>
    </ModalTrigger>
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
    </ModalContent>
  </Modal>
</template>
