import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Martes from "./pages/Martes";
import Viernes from "./pages/Viernes";
import Sabado from "./pages/Sabado";
import Domingo from "./pages/Domingo";
import Info from "./pages/Info";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/martes",
    Component: Martes,
  },
  {
    path: "/viernes",
    Component: Viernes,
  },
  {
    path: "/sabado",
    Component: Sabado,
  },
  {
    path: "/domingo",
    Component: Domingo,
  },
  {
    path: "/info",
    Component: Info,
  },
]);
