import { useState } from "react";
import styles from "./Header.module.scss";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu.jsx";
import logo from "../../../public/img/logoEntraidant.png";

// import logo from "../../../public/img/logo.png";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header
      className={`${styles.header} ${styles.headerXs} d-flex flex-row align-items-center space-between`}
    >
     <img src={logo} alt="Entraidant logo" />
      <div className=" ">
        <h1 className="header-title">Entraidant</h1>
      </div>

      <ul className={styles.headerList}>
        <button className="mr-5 btn btn-reverse-primary ">
          <span>inscription</span>
        </button>
        <button className="btn btn-primary">
          <span>connexion</span>
        </button>
      </ul>
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
