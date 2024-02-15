import styles from "./Footer.module.scss";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer
      className={`${styles.footer} ${styles.footerXs} d-flex align-items-center space-around justify-content-center p-20 `}
    >
      <NavLink to="/quisommesnous" className={styles.link}>Qui somme nous ?</NavLink>
      <p>Mention Légale &#169; Entraidant.</p>
      {/* <p>Ce site est édité par [Entraidant]</p> */}
    </footer>
  );
}

export default Footer;
