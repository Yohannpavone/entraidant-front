import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className={`${styles.footer} ${styles.footerXs} d-flex align-items-center space-around justify-content-center p-20 `}
    >
      <Link to="/quisommesnous" className={styles.link}>Qui somme nous ?</Link>
      <p>Mention Légale &#169; Entraidant.</p>
      {/* <p>Ce site est édité par [Entraidant]</p> */}
    </footer>
  );
}

export default Footer;
