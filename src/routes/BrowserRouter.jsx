import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootPage from "./RootPage";
import AboutPage from "./AboutPage";

// import ErrorPage from "./ErrorPage";
import NotFound from "./ErrorPage";
import LoadingSuspenseComponent from "../components/Suspense/LoadingSuspenseComponentSimple";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/about",
    element: <AboutPage />,
    errorElement: <NotFound />,
  },

  {
    path: "debug/loading",
    element: <LoadingSuspenseComponent />,
  },
]);

function BrowserRouter() {
  return (
    <RouterProvider
      //fallbackElement={NotFound}
      router={router}
    />
  );
}

export default BrowserRouter;
