import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./global.css";
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")!).render(<App />);