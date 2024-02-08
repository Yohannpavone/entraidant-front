import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import styles from "./App.module.scss";
import Homepage from "../pages/Homepage/Homepage.jsx";


function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <Homepage/>
      <Footer />
    </div>
  );
}

export default App;
