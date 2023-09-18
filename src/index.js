import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { AppProvider } from "./components/Data/context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* use AppProvider from context.js file */}
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
);
