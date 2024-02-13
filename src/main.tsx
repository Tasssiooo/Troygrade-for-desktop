import React from "react";
import ReactDOM from "react-dom/client";
import WindowBar from "./components/WindowBar";
import "./styles.css";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import { HashRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Code from "./windows/Code";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <WindowBar />
        <Routes>
          <Route path="/" Component={App} />
          <Route path="/code" Component={Code} />
        </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
