import styles from "./HeaderForm.module.scss"

function HeaderForm() {
  return (
    <form action="" className={`${styles.formXs} ml-30`}>
      <input type="text" placeholder="mail" className={styles.inputMail} />
      <input type="text" placeholder="password" id="password" />
      <button className={`btn-primary ${styles.buttonLogin}`}>connexion</button>
    </form>
  );
}

export default HeaderForm;