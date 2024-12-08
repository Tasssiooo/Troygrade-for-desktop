<script setup lang="ts">
import { container, header, steps_container } from "./styles";

import screenshot1 from "~/assets/images/screenshot-1.png";
import screenshot2 from "~/assets/images/screenshot-2.png";
import screenshot3 from "~/assets/images/screenshot-3.png";
import screenshot4 from "~/assets/images/screenshot-4.png";
import screenshot5 from "~/assets/images/screenshot-5.png";
import screenshot6 from "~/assets/images/screenshot-6.png";
import screenshot7 from "~/assets/images/screenshot-7.png";
import screenshot8 from "~/assets/images/screenshot-8.png";

import Step from "./components/step/index.vue";

const steps = [
  {
    num: "1.",
    text: "Click on the plus button to add files;",
    img: screenshot1,
  },
  {
    num: "2.",
    text: "After the dialog opens, select the files you want to convert;",
    img: screenshot2,
  },
  {
    num: "2.1.",
    text: "The files will be organized like this;",
    img: screenshot3,
  },
  {
    num: "3.",
    text: "You can select one or more files to edit;",
    img: screenshot4,
  },
  {
    num: "",
    text: "",
    img: screenshot5,
  },
  {
    num: "4.",
    text: "There are some handlers you can use, each one has a specific way to handle the files, below them there is an editable area where you can make modifications on the code;",
    img: screenshot6,
  },
  {
    num: "5.",
    text: 'After clicking on the convert button, this dialog will appear. You can either use the default settings or make a custom setting yourself clicking on "Continue".',
    img: screenshot7,
  },
  {
    num: "6.",
    text: 'After proceeding with "Continue", this modal will appear, here you have to set paths for assets and textures. There are also some options you can use by filling in the checkboxes;',
    img: screenshot8,
  },
];
</script>

<template>
  <div :class="container">
    <header :class="header">
      <h1>How to use Troygrade: A simple troybin to bin conversion</h1>
    </header>
    <div :class="steps_container">
      <template v-for="step in steps">
        <Step :num="step.num" :text="step.text" :img="step.img" />
      </template>
    </div>
  </div>
</template>
