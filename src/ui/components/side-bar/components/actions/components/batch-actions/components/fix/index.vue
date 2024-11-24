<script setup lang="ts">
import {
  Modal,
  ModalClose,
  ModalContent,
  ModalTitle,
} from "../../../../../../../modal";

import { button } from "../../../../../../../../../../styled-system/recipes";

import { choose_container, choose_wrapper, choices } from "./styles";

import { handleConvertFile } from "../../../../../../../../../lib/handlers";

import appState from "../../../../../../../../../states";

const { updateOpen, open } = defineProps<{
  updateOpen?: (value: boolean) => any;
  open: boolean;
}>();

function handleDefault() {
  appState.selectedFiles.forEach((id) => {
    const file = appState.files.find((file) => file.id === id);

    handleConvertFile(file!);
  });

  appState.selectedFiles = [];
}

function handleContinue() {
  //todo
}
</script>

<template>
  <Modal v-on:update:open="updateOpen" :open="open">
    <ModalContent>
      <ModalTitle>Convert files</ModalTitle>
      <div>
        <p>
          You are about to convert {{ appState.selectedFiles.length }} files.
        </p>
        <p>How to proceed?</p>
        <p>Default settings or continue to set up the files yourself.</p>
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
