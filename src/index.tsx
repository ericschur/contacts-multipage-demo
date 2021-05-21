import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import UserLoggedContextProvider from "./store/UserLoggedContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserLoggedContextProvider>
        <App />
      </UserLoggedContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
