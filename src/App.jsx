// Used for suspense
import React from "react";

// Language support
import "./i18n";

// Toast notifications
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import ToggleFullScreenEffect from "./components/ToggleFullScreen/ToggleFullScreenEffect";
import WebAppTitleEffect from "./components/WebAppTitle/WebAppTitleEffect";

// Routes and route suspense
import LoadingSuspenseComponent from "./components/Suspense/LoadingSuspenseComponentSimple";
import BrowserRouter from "./routes/BrowserRouter";

function App() {
  return (
    <>
      <React.Suspense fallback={<LoadingSuspenseComponent />}>
        {/* <ThemeProvider theme={theme}> */}
        {/* <CssBaseline /> */}
        <ToggleFullScreenEffect />
        <WebAppTitleEffect />
        <div className="flex flex-col items-center justify-center h-screen">
          <main
            className="flex flex-col items-center justify-center flex-1"
            style={{ height: "calc(100vh - 56px)" }}
          >
            <BrowserRouter />
          </main>
        </div>
        {/* </ThemeProvider> */}
      </React.Suspense>
      <ToastContainer stacked={false} limit={1} />
    </>
  );
}

export default App;
