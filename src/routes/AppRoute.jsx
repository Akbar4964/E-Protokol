import React from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

function AppRoute() {
  return (
    <Routes>
      {privateRoutes.map((el) => (
        <Route
          key={1}
          path={el.path}
          element={<PrivateRoute>{<el.page />}</PrivateRoute>}
        />
      ))}
      {publicRoutes.map((el) => (
        <Route
          key={1}
          path={el.path}
          element={<PublicRoute>{<el.page />}</PublicRoute>}
        />
      ))}
    </Routes>
  );
}

export default AppRoute;
