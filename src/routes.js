import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login"
import { HOME_ROUTE, LOGIN_ROUTE } from "./Util/const"

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Compoment: <Login />,
  },
];

export const privateRoutes = [
  {
    path: HOME_ROUTE,
    Compoment: <Home />,
  }
]