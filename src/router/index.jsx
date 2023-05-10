import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Landing, { loader as landingLoader } from "../pages/Landing";
import NewClient, { action as newClientAction } from "../pages/NewClient";
import EditClient, {
  loader as editClientLoader,
  action as editClientAction,
} from "../pages/EditClient";
import { action as deleteClientAction } from "./../components/Client";
import ErrorPage from "../components/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/new",
        element: <NewClient />,
        action: newClientAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "/clients/:id/edit",
        element: <EditClient />,
        loader: editClientLoader,
        action: editClientAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "/clients/:id/delete",
        action: deleteClientAction,
      },
    ],
  },
]);
