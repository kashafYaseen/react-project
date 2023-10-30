import React from "react";

const Dashboard = React.lazy(() => import("./views/Dashboard/Index"));

const routes = [
  { path: "/dashboard", name: "Dashboard", element: <Dashboard /> },
];

export default routes;
