import { createBrowserRouter } from "react-router-dom";
import PageRoot from "../pages/pageRoot";
import App from "../App";
import PageError from "../pages/pageError";
import PageReverberi from "../pages/pageReverberi";
import PageApostolo from "../pages/pageApostolo";
import { PageInvernizzi } from "../pages/pageInvernizzi";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageRoot />,
    errorElement: <PageError />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "reverberi",
        element: <PageReverberi />,
      },
      {
        path: "apostolo",
        element: <PageApostolo />,
      },
      {
        path: "invernizzi",
        element: <PageInvernizzi />,
      },
    ],
  },
]);
