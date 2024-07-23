import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Prvider from "../src/Redux/Provider"
import "../src/Styles/Media.css"
import "./Styles/Index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Prvider>
      <App />
    </Prvider>
  </React.StrictMode>
);
