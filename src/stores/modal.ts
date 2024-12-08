import { ModalStore } from "../types";

import { reactive } from "vue";

const mm = reactive<ModalStore>({
  //state
  settings: {
    open: false,
    method: "single",
  },
  delete: {
    open: false,
    method: "single",
  },
  //actions
  openSettings(open, method) {
    this.settings.open = open;
    if (method) {
      this.settings.method = method;
    }
  },
  openDelete(open, method) {
    this.delete.open = open;
    if (method) {
      this.delete.method = method;
    }
  },
});

export default mm;
