<script setup lang="ts">
import { button } from "../../../../../../../styled-system/recipes";
import { choose_container, choose_wrapper } from "./styles";

import {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalTitle,
  ModalClose,
} from "../../../../modal";

import appState from "../../../../../../states";

import MdiDeleteOutline from "../../../../icons/mdi-delete-outline.vue";


import Tooltip from "../../../../tooltip/index.vue";

function handleDelete() {
  appState.files = appState.files.filter(
    (file) => file.id !== appState.activeFile?.id,
  );
  appState.activeFile = null;
}
</script>

<template>
  <Modal>
    <Tooltip content="Delete" side="bottom" :side-offset="5">
      <ModalTrigger as-child>
      <button
        :class="button({ visual: 'square' })"
        :style="{
          pointerEvents: appState.activeFile?.name ? 'auto' : 'none',
        }"
      >
        <MdiDeleteOutline />
      </button>
    </ModalTrigger>
    </Tooltip>
    <ModalContent>
      <ModalTitle>Are you sure?</ModalTitle>
      <div>
        <p>You are about to delete "{{ appState.activeFile?.name }}".</p>
      </div>
      <div :class="choose_container">
        <div :class="choose_wrapper">
          <ModalClose as-child>
            <button :class="button({ visual: 'dialog' })" @click="handleDelete">
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
