import { DialogClose, DialogRoot, DialogTrigger } from "radix-vue";

import ModalContent from "./components/modal-content/index.vue";
import ModalTitle from "./components/modal-title/index.vue";

const Modal = DialogRoot;

const ModalTrigger = DialogTrigger;

const ModalClose = DialogClose;

export { Modal, ModalTitle, ModalContent, ModalTrigger, ModalClose };
