<script setup lang="ts">
import {
  Modal,
  ModalContent,
  ModalTitle,
  ModalTrigger,
  ModalClose,
} from "~/ui/primitives/modal";

import { button } from "~/styled-system/recipes";

import { choose_container, choose_wrapper, choices } from "./styles";

import { handleConvertFile } from "~/lib/handlers";

import { fm, mm } from "~/stores/index";

import MdiWrenchOutline from "~/ui/primitives/icons/mdi-wrench-outline.vue";

import Tooltip from "~/ui/primitives/tooltip/index.vue";

function handleDefault() {
  if (fm.active) {
    handleConvertFile(fm.active);
  }
}
</script>

<template>
  <Modal>
    <Tooltip content="Convert/Fix" side="bottom">
      <ModalTrigger as-child>
        <button
          :class="button({ visual: 'square' })"
          :style="{
            pointerEvents:
              fm.active && fm.active.type === 'CONV_TROYBIN' ? 'auto' : 'none',
          }"
        >
          <MdiWrenchOutline />
        </button>
      </ModalTrigger>
    </Tooltip>
    <ModalContent>
      <ModalTitle>Convert file</ModalTitle>
      <div>
        <p>You are about to convert "{{ fm.active?.name }}".</p>
        <p>How to proceed?</p>
        <p>Default settings or continue to set up the file yourself.</p>
      </div>
      <div :class="choose_container">
        <div :class="choose_wrapper">
          <div :class="choices">
            <ModalClose as-child>
              <button
                :class="button({ visual: 'dialog' })"
                @click="handleDefault"
              >
                Default
              </button>
            </ModalClose>
            <ModalClose as-child>
              <button
                :class="button({ visual: 'dialog' })"
                @click="mm.openSettings(true, 'single')"
              >
                Continue
              </button>
            </ModalClose>
          </div>
          <ModalClose as-child>
            <button :class="button({ visual: 'dialog' })">Cancel</button>
          </ModalClose>
        </div>
      </div>
    </ModalContent>
  </Modal>
</template>
