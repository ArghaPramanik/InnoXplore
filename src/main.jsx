import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import useCustomToast from "./hooks/useCustomToast";

const Root = () => {
  const { ToastContainer, toast } = useCustomToast();

  return (
    <>
      <Router>
        <App toast={toast} />
        <ToastContainer />
      </Router>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
