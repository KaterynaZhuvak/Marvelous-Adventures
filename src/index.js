import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './styles.css'

import App from "./components/App.jsx";

createRoot(document.getElementById("root")).render(<BrowserRouter><App /></BrowserRouter>);
