import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./Theme/ThemeContext";

const Root = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

ReactDOM.createRoot(document.getElementById("root")!).render(<Root />);
