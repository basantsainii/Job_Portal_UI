import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LoaderContextProvider } from "./Components/LoaderContext.jsx";
import { DataContextProvider } from "./Components/DataContext.jsx";
import { ProfileContextProvider } from "./Components/ForEmployee/ProfileContext.jsx";
import { ProfileBackDropProvider } from "./Components/ForEmployee/ProfileBackDrop.jsx";
import { ModalContextProvider } from "./Modal/ModalContext.jsx";

import { EmployeeDataProvider } from "./Components/ForEmployee/EmployeeDataContext.jsx";
import { JobContextProvider } from "./Components/ForEmployee/JobContext.jsx";
import { BackendContextProvider } from "./Components/BackendDomainContext.jsx";

BackendContextProvider



createRoot(document.getElementById("root")).render(
  <LoaderContextProvider>
    <DataContextProvider>
      <ProfileBackDropProvider>
        <JobContextProvider>
        <ProfileContextProvider>
        <ModalContextProvider>
        <EmployeeDataProvider>
        <BackendContextProvider>
          <App />
        </BackendContextProvider>
        </EmployeeDataProvider>
        </ModalContextProvider>
        </ProfileContextProvider>
        </JobContextProvider>
      </ProfileBackDropProvider>
    </DataContextProvider>
  </LoaderContextProvider>
);
