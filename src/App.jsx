// Used for suspense
import React from "react";

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
        <BrowserRouter />
        {/* </ThemeProvider> */}
      </React.Suspense>
      <ToastContainer stacked={false} limit={1} />
    </>
  );
}

export default App;
