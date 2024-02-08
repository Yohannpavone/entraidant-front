import styles from "./HeaderMenu.module.scss"

function HeaderMenu() {
  return (
    <ul className={`${styles.MenuContainer} card p-20`}>
      <li>connexion</li>
      <li>inscription</li>
    </ul>
  );
}

export default HeaderMenu;