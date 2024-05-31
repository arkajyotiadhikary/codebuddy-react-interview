import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MultiStepForm from "./pages/MultiStepForm";
import Posts from "./pages/Posts";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/form", element: <MultiStepForm /> },
      { path: "/posts", element: <Posts /> },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
