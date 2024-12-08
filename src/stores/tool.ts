import { ToolStore } from "../types";

import { nextTick, reactive } from "vue";

const tm = reactive<ToolStore>({
  //state
  editor: null,
  filter: {
    show: false,
    value: "",
  },
  //actions
  updateFilterValue(value) {
    this.filter.value = value;
  },
  async showFilter(show) {
    this.filter.show = show;

    if (show) {
      await nextTick();
      document.getElementById("filter")?.focus();
    }
  },
});

export default tm;
