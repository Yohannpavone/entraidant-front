import { createBrowserRouter } from "react-router-dom";
import App from "./App/App.jsx"
import Homepage from "./pages/Homepage/Homepage.jsx";
import Specialistes from "./pages/Specialistes/Specialistes.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx"
import Demarches from "./pages/Demarches/Demarches.jsx";
import ServicesExchange from "./pages/ServicesExchange/ServicesExchange.jsx"
import Messagerie from "./pages/Messagerie/Messagerie.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import ServiceForm from'./pages/ServicesExchange/ServiceForm.jsx'


// import { rootLoader } from "./loaders/rootLoader.jsx";


export const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    // loader: rootLoader,
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
        path: "/servicesform",
        element:<ServiceForm/>
      },

      {
        path: "/messagerie",
        element:<Messagerie/>
      },
      {
        path: "/signup",
        element:<SignUp/>
      },
      {
        path: "/signin",
        element: <SignIn/>
      },
      {
        path: "/profile",
        element: <Profile/>
      }

    ]
  }
])