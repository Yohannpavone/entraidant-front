import { createBrowserRouter } from "react-router-dom";
// import { rootLoader } from "./loaders/rootLoader.jsx";
import { lazy } from "react";
import App from "./App/App.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import ServiceForm from'./pages/ServicesExchange/ServiceForm.jsx'


// import { rootLoader } from "./loaders/rootLoader.jsx";


// lazy loading permet de ne pas charger tous les modules lors de la première connexion au site
const Homepage = lazy(() => import("./pages/Homepage/Homepage.jsx"));
const Specialistes = lazy(() => import("./pages/Specialistes/Specialistes.jsx"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs.jsx"));
const Demarches = lazy(() => import("./pages/Demarches/Demarches.jsx"));
const ServicesExchange = lazy(() => import("./pages/ServicesExchange/ServicesExchange.jsx"));
const Messagerie = lazy(() => import("./pages/Messagerie/Messagerie.jsx"));
const SignUp = lazy(() => import("./pages/SignUp/SignUp.jsx"));
const SignIn = lazy(() => import("./pages/SignIn/SignIn.jsx"));
const Profile = lazy(() => import("./pages/Profile/Profile.jsx"));


//router permettant la navigation sur le site 
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: rootLoader,
    children: [
      {
        index: true,
        errorElement: <ErrorPage />,
        element: <Homepage />,
      },
      {
        path: "/specialistes",
        element: <Specialistes />,
      },
      {
        path: "/quisommesnous",
        element: <AboutUs />,
      },
      {
        path: "/demarches",
        element: <Demarches />,
      },
    
      {
        path: "/services",
        element: <ServicesExchange />,
      },
      {
        path: "/servicesform",
        element:<ServiceForm/>
      },

      {
        path: "/messagerie",
        element: <Messagerie />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
