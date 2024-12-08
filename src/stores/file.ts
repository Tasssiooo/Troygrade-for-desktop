import { Entry, FileStore } from "../types";

import { reactive } from "vue";

import tm from "./tool";

const fm = reactive<FileStore>({
  //state
  all: [],
  active: null,
  selected: [],
  //actions
  deleteBatch() {
    for (const id of this.selected) {
      if (this.active && this.active.id === id) {
        this.active = null;
      }
      this.all.splice(this.findEntry(this.all, id, 0, this.all.length - 1), 1);
    }
    this.emptySelected();
  },
  delete() {
    if (this.active) {
      this.all.splice(
        this.findEntry(this.all, this.active.id, 0, this.all.length - 1),
        1,
      );
      this.selected = this.selected.filter((id) => id !== this.active?.id);
      this.active = null;
    }
  },
  emptySelected() {
    this.selected = [];
  },
  findEntry(data: Entry[], target: number, low: number, high: number) {
    if (low > high) {
      return NaN;
    } else {
      let mid = Math.floor((low + high) / 2);

      if (target === data[mid].id) {
        return mid;
      } else if (target < data[mid].id) {
        return this.findEntry(data, target, low, mid - 1);
      } else {
        return this.findEntry(data, target, mid + 1, high);
      }
    }
  },
  saveChanges() {
    if (this.active && tm.editor) {
      this.active.content = tm.editor.getValue();
    }
  },
  toggleSelectAll() {
    if (this.selected.length !== this.all.length) {
      this.selected = this.all.map((file) => file.id);
    } else {
      this.emptySelected();
    }
  },
  toggleSelect(id: number) {
    if (this.selected.includes(id)) {
      this.selected = this.selected.filter((i) => i !== id);
    } else {
      this.selected.push(id);
    }
  },
  updateActive(id: number) {
    this.active =
      this.all[this.findEntry(this.all, id, 0, this.all.length - 1)];
  },
});

export default fm;
