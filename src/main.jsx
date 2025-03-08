import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LoaderContextProvider } from "./Components/LoaderContext.jsx";
import { DataContextProvider } from "./Components/DataContext.jsx";
import { ProfileContextProvider } from "./Components/ProfileContext.jsx";
import { ProfileBackDropProvider } from "./Components/ProfileBackDrop.jsx";
import { ModalContextProvider } from "./Modal/ModalContext.jsx";




createRoot(document.getElementById("root")).render(
  <LoaderContextProvider>
    <DataContextProvider>
      <ProfileBackDropProvider>
        <ProfileContextProvider>
        <ModalContextProvider>
          <App />
        </ModalContextProvider>
        </ProfileContextProvider>
      </ProfileBackDropProvider>
    </DataContextProvider>
  </LoaderContextProvider>
);
