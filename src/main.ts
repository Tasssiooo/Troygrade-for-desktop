import "./main.css";

import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import App from "./App.vue";

import Main from "./ui/windows/main.vue";
import Help from "./ui/windows/help.vue";

const routes = [
  { path: "/", component: Main },
  { path: "/help", component: Help },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
