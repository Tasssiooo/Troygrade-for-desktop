<script setup lang="ts">
import {
  Modal,
  ModalClose,
  ModalContent,
  ModalTitle,
} from "~/ui/primitives/modal";

import { button } from "~/styled-system/recipes";

import { choose_container, choose_wrapper } from "./styles";

import { FileState } from "~/states/index";

const { updateOpen, open } = defineProps<{
  updateOpen?: (value: boolean) => any;
  open: boolean;
}>();

function handleDeleteBatch() {
  let i = 0;

  FileState.files = FileState.files.filter((file) => {
    if (file.id == FileState.selectedFiles[i].id) {
      if (FileState.selectedFiles[i].id === FileState.activeFile?.id) {
        FileState.activeFile = null;
      }

      ++i;

      return false;
    }
    return true;
  });

  FileState.selectedFiles = [];
}
</script>

<template>
  <Modal v-on:update:open="updateOpen" :open="open">
    <ModalContent>
      <ModalTitle>Are you sure?</ModalTitle>
      <div>
        <p>
          You are about to delete {{ FileState.selectedFiles.length }} files.
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
