<script setup lang="ts">
import { button } from "~/styled-system/recipes";
import { choose_container, choose_wrapper } from "./styles";

import {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalTitle,
  ModalClose,
} from "~/ui/primitives/modal";

import { fm } from "~/stores/index";

import MdiDeleteOutline from "~/ui/primitives/icons/mdi-delete-outline.vue";

import Tooltip from "~/ui/primitives/tooltip/index.vue";
</script>

<template>
  <Modal>
    <Tooltip content="Delete" side="bottom" :side-offset="5">
      <ModalTrigger as-child>
        <button
          :class="button({ visual: 'square' })"
          :style="{
            pointerEvents: fm.active?.name ? 'auto' : 'none',
          }"
        >
          <MdiDeleteOutline />
        </button>
      </ModalTrigger>
    </Tooltip>
    <ModalContent>
      <ModalTitle>Are you sure?</ModalTitle>
      <div>
        <p>You are about to delete "{{ fm.active?.name }}".</p>
      </div>
      <div :class="choose_container">
        <div :class="choose_wrapper">
          <ModalClose as-child>
            <button :class="button({ visual: 'dialog' })" @click="fm.delete()">
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
