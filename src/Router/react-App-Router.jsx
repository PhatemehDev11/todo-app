import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "../page/mainPage";
import Calender from "../page/calenderPage";
import { Children } from "react";
import Layout from "../page/layout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <MainPage/> },
      { path: "calender", element: <Calender /> },
    ]
  },

])

function AppRouter() {
  return <RouterProvider router={router} />

}

export default AppRouter;

