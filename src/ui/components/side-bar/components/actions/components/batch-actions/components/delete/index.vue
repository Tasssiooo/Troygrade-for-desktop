<script setup lang="ts">
import {
  Modal,
  ModalClose,
  ModalContent,
  ModalTitle,
} from "../../../../../../../modal";

import { button } from "../../../../../../../../../../styled-system/recipes";

import { choose_container, choose_wrapper } from "./styles";

import appState from "../../../../../../../../../states";

const { updateOpen, open } = defineProps<{
  updateOpen?: (value: boolean) => any;
  open: boolean;
}>();

function handleDeleteBatch() {
  let i = 0;

  appState.files = appState.files.filter((file) => {
    if (file.id == appState.selectedFiles[i]) {
      ++i;
      if (appState.selectedFiles[i] === appState.activeFile?.id) {
        appState.activeFile = null;
      }
      return false;
    }
    return true;
  });
}
</script>

<template>
  <Modal v-on:update:open="updateOpen" :open="open">
    <ModalContent>
      <ModalTitle>Are you sure?</ModalTitle>
      <div>
        <p>
          You are about to delete {{ appState.selectedFiles.length }} files.
        </p>
      </div>
      <div :class="choose_container">
        <div :class="choose_wrapper">
          <ModalClose as-child>
            <button
              :class="button({ visual: 'dialog' })"
              @click="handleDeleteBatch"
            >
              Delete
            </button>
          </ModalClose>
          <ModalClose as-child>
            <button :class="button({ visual: 'dialog' })">Cancel</button>
          </ModalClose>
        </div>
      </div>
    </ModalContent>
  </Modal>
</template>
