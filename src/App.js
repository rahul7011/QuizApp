import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "../components/Body";
import Store from "./store";
import { Provider } from "react-redux";
const AppLayout = () => {
  return (
    // React.fragement(Component that is exported by react)
    <>
      {/* This will provide Redux Store to our whole App */}
      <Provider store={Store}>
        <Outlet />
      </Provider>
    </>
  );
};

//Always create it below AppLayout
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
    ],
  },
]);
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
