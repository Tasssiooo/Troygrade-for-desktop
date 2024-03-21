import React from "react";
import ReactDOM from "react-dom/client";
import WindowBar from "./components/WindowBar";
import "./styles.css";

import { invoke } from "@tauri-apps/api/tauri";

import { Toaster } from "./components/Globals/Sonner";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import { HashRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Code from "./windows/Code";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

document.addEventListener("DOMContentLoaded", () => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <HashRouter>
          <WindowBar />
          <Routes>
            <Route path="/" Component={App} />
            <Route path="/code" Component={Code} />
          </Routes>
          <Toaster />
        </HashRouter>
      </Provider>
    </React.StrictMode>
  );

  invoke("show_main_window");
});
