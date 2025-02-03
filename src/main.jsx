import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LoaderContextProvider } from "./Components/LoaderContext.jsx";
import { DataContextProvider } from "./Components/DataContext.jsx";
createRoot(document.getElementById("root")).render(
  <LoaderContextProvider>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </LoaderContextProvider>
);
