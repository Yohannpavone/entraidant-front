import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import styles from "./App.module.scss";
// import Homepage from "../pages/Homepage/Homepage.jsx";
import { Outlet, useLoaderData } from "react-router-dom";
import { Suspense } from "react";

function App() {
  // async function test() {
  //   const response = await fetch("/api/test");
  //   console.log(await response.json());
  // }
  // test();

  const user = useLoaderData();
  console.log(user);

  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
