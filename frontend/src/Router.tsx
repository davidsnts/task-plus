import { createBrowserRouter, Outlet } from "react-router";
import Header from "./components/Header";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#161410]">
      <Header />
      <Outlet />
    </div>
  );
};

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <div>Hello</div>,
      },
    ],
  },
]);
