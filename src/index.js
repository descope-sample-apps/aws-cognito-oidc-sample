import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Dashboard from "./views/Dashboard";
import reportWebVitals from "./reportWebVitals";
import DescopeLogin from "./views/DescopeLogin";
import Profile from "./views/Profile";
import { AuthProvider } from "@descope/react-sdk";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider projectId="P2PD8H2nZbPk5cSJfChsc00ZCi0w">
    <BrowserRouter>
      <React.StrictMode>
        <Routes>
          <Route exact path="/" element={<App />}></Route>
          <Route exact path="/login" element={<DescopeLogin />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
