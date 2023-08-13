import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
      ],
    },
  ],
  { basename: import.meta.env.DEV ? "/" : "/portfolio/" }
);

export default router;
