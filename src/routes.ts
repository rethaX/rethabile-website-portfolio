import { createBrowserRouter } from "react-router";
import { LoadingScreen } from "./components/LoadingScreen";
import { Portfolio } from "./components/Portfolio";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LoadingScreen,
  },
  {
    path: "/portfolio",
    Component: Portfolio,
  },
]);
