import styles from "./Footer.module.scss"

function Footer() {
  
  
  return (
    <footer className={`${styles.footer} ${styles.footerXs} d-flex align-items-center justify-content-center p-20 `}>
      <p>Mention Légale &#169; Entraidant.</p>
      {/* <p>Ce site est édité par [Entraidant]</p> */}
    </footer>

  );
}

export default Footer;
