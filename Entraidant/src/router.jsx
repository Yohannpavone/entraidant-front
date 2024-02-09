import { createBrowserRouter } from "react-router-dom";
import App from "./App/App.jsx"
import Homepage from "./pages/Homepage/Homepage.jsx";
import Specialistes from "./pages/Specialistes/Specialistes.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx"
import Demarches from "./pages/Demarches/Demarches.jsx";
import ServicesExchange from "./pages/ServicesExchange/ServicesExchange.jsx"
import Messagerie from "./pages/Messagerie/Messagerie.jsx";
import Login from "./pages/Login/Login.jsx";


export const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children: [
      {
        path: "/",
        element: <Homepage/>
      },
      {
        path: "/specialistes",
        element:<Specialistes/>
      },
      {
        path: "/quisommesnous",
        element:<AboutUs/>
      },
      {
        path: "/demarches",
        element:<Demarches/>
      },
      {
        path: "/services",
        element:<ServicesExchange/>
      },
      {
        path: "/messagerie",
        element:<Messagerie/>
      },
      {
        path: "/login",
        element:<Login/>
      },
    ]
  }
])