import { Route, Routes } from "react-router-dom";
import { HomePage, Proxy } from './pages/index';

const routes = [
  { path: "", name: "login", element: <Proxy /> },
  { path: ":city", name: "login", element: <HomePage /> },
];

export const AppRoutes = () => {

  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.name}
          path={route.path}
          element={route.element}
        />
      ))}
    </Routes>
  );
};
