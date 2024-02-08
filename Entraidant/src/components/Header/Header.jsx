import { useState } from "react";
import styles from "./Header.module.scss";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu.jsx";
import logo from "../../../public/img/logoEntraidant.png";
import HeaderForm from "./components/HeaderForm/HeaderForm.jsx";

// import logo from "../../../public/img/logo.png";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header
      className={`${styles.header} ${styles.headerXs} d-flex flex-row align-items-center space-between`}
    >
     <img src={logo} alt="Entraidant logo" />
      <div className=" ">
        <h1>Entraidant</h1>
      </div>
      <HeaderForm/>

      <div className={styles.headerListXs}>
        <button className="btn btn-primary">
          <span>inscription</span>
        </button>
      </div>
      <i
        onClick={() => setShowMenu(true)}
        className={`fa-solid fa-bars mr-15 ${styles.burgerMenuXs}`}
      ></i>
      {showMenu && (
        <>
          <div onClick={() => setShowMenu(false)} className="calc"></div>
          <HeaderMenu />
        </>
      )}
    </header>
  );
}

export default Header;
