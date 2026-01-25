import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

import { AuthProvider } from "./context/AuthContext";
import { FeedProvider } from "./context/FeedContext";
import { SettingsProvider } from "./context/SettingsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <SettingsProvider>
        <FeedProvider>
          <App />
        </FeedProvider>
      </SettingsProvider>
    </AuthProvider>
  </BrowserRouter>
);
