import { AdminLayout, AuthLayout, MainLayout } from "@/Layouts";
import { AdminHome, OrderHistory, ProductCatalog, UserHome } from "@/Pages";
import { AdminSignUp, Login, SignUp } from "@/Pages/Auth";
import { createBrowserRouter } from "react-router-dom";

const IOMRoutes = createBrowserRouter(
  [
    {
      path: "/",
      children: [
        {
          element: <MainLayout />,
          children: [
            {
              index: true,
              element: <UserHome />,
            },
            {
              path: "product-catalog",
              element: <ProductCatalog />,
            },
            {
              path: "order-history",
              element: <OrderHistory />,
            },
          ],
        },
        {
          element: <AuthLayout />,
          children: [
            {
              path: "login",
              element: <Login />,
            },
            {
              path: "signup",
              element: <SignUp />,
            },
          ],
        },
        {
          // ADMIN
          path: "admin",
          children: [
            {
              element: <AdminLayout />,
              children: [
                {
                  index: true,
                  element: <AdminHome />,
                },
              ],
            },
            {
              path: "signup",
              element: <AdminSignUp />,
            },
          ],
        },
      ],
    },
    {
      path: "*",
      element: <>404 - Page Not Found</>,
    },
  ],
  {
    basename: "/",
  }
);

export default IOMRoutes;
