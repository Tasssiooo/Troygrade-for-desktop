import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Splashscreen from "./components/UI/Windows/Splashscreen";
import HelpWindow from "./components/UI/Windows/HelpWindow";
import "./index.css";

import { invoke } from "@tauri-apps/api/tauri";

import { HashRouter, Routes, Route } from "react-router-dom";

document.addEventListener("DOMContentLoaded", () => {
  invoke("close_splashscreen");
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" Component={App} />
        <Route path="/help" Component={HelpWindow} />
        <Route path="/splashscreen" Component={Splashscreen} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
