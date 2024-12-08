<script setup lang="ts">
import {
  Modal,
  ModalClose,
  ModalContent,
  ModalTitle,
} from "~/ui/primitives/modal";

import { button } from "~/styled-system/recipes";

import { choose_container, choose_wrapper } from "./styles";

import { fm } from "~/stores/index";

const { updateOpen, open } = defineProps<{
  updateOpen?: (value: boolean) => any;
  open: boolean;
}>();
</script>

<template>
  <Modal v-on:update:open="updateOpen" :open="open">
    <ModalContent>
      <ModalTitle>Are you sure?</ModalTitle>
      <div>
        <p>You are about to delete {{ fm.selected.length }} files.</p>
      </div>
      <div :class="choose_container">
        <div :class="choose_wrapper">
          <ModalClose as-child>
            <button
              :class="button({ visual: 'dialog' })"
              @click="fm.deleteBatch()"
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
