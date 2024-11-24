<script setup lang="ts">
import {
  Modal,
  ModalContent,
  ModalTitle,
  ModalTrigger,
  ModalClose,
} from "../../../../modal";

import { button } from "../../../../../../../styled-system/recipes";

import { choose_container, choose_wrapper, choices } from "./styles";

import { handleConvertFile } from "../../../../../../lib/handlers";

import appState from "../../../../../../states";

import MdiWrenchOutline from "../../../../icons/mdi-wrench-outline.vue";

function handleDefault() {
  handleConvertFile(appState.activeFile!);
}

function handleContinue() {
  //todo
}
</script>

<template>
  <Modal>
    <ModalTrigger as-child>
      <button
        :class="button({ visual: 'square' })"
        :style="{ pointerEvents: appState.activeFile?.name ? 'auto' : 'none' }"
      >
        <MdiWrenchOutline />
      </button>
    </ModalTrigger>
    <ModalContent>
      <ModalTitle>Convert file</ModalTitle>
      <div>
        <p>You are about to convert "{{ appState.activeFile?.name }}".</p>
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
                @click="handleContinue"
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
