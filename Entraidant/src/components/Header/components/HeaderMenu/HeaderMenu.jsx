import styles from "./HeaderMenu.module.scss"
import { Link } from "react-router-dom";

function HeaderMenu() {
  return (
    <ul className={`${styles.MenuContainer} card p-20`}>
      <li>connexion</li>
      <Link to="/signup">
        {" "}
        <li>inscription</li>
      </Link>
    </ul>
  );
}

export default HeaderMenu;