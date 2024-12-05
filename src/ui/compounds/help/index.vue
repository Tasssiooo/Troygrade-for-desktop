<script setup lang="ts">
import { css } from "~/styled-system/css";

import screenshot1 from "~/assets/images/screenshot-1.png";

import Step from "./components/step/index.vue";

const steps = [
  {
    num: "1",
    text: "Click on the plus button to add files;",
    img: screenshot1,
  },
  {
    num: "2",
    text: "After the dialog opens, select the files you want to convert;",
    img: screenshot1,
  },
  {
    num: "2.1",
    text: "The files will be organized like this;",
    img: screenshot1,
  },
  {
    num: "3",
    text: "You can select one or more files to edit;",
    img: screenshot1,
  },
  {
    num: "4",
    text: "There are some handlers you can use, each one has a specific way to handle the files, above them there is an editable area where you can make modifications on the code;",
    img: screenshot1,
  },
  {
    num: "5",
    text: "After clicking on the convert button, this dialog will appear;",
    img: screenshot1,
  },
  {
    num: "6",
    text: 'After proceeding with "Continue", this modal will appear, here you have to set paths for assets and file. There are also some options that you can use by filling in the checkboxes;',
    img: screenshot1,
  },
];
</script>

<template>
  <div
    :class="
      css({
        display: 'flex',
        flexDir: 'column',
        alignItems: 'center',
        p: '4',
        w: 'full',
        h: 'full',
        overflow: 'auto',
      })
    "
  >
    <header :class="css({ fontSize: 'lg', mt: '4' })">
      <h1>How to use Troygrade: A simple troybin to bin conversion</h1>
    </header>
    <div :class="css({ spaceY: '4', mt: '4' })">
      <template v-for="step in steps">
        <Step :num="step.num" :text="step.text" :img="step.img" />
      </template>
    </div>
  </div>
</template>
