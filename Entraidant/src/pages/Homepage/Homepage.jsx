import styles from "./Homepage.module.scss";
import accueil from "../../../public/img/accueil.png";
import { NavLink } from "react-router-dom";

function Homepage() {
  return (
    <div
      className={` ${styles.mainContainerXs} d-flex flex-column p-20 justify-content-center`}
    >
      <div
        className={` ${styles.containerCardXs} d-flex justify-content-center space-between mb-20`}
      >
        <NavLink to="/demarches"
          className={`${styles.homepageLink} ${styles.cardXs} mt-30 d-flex flex-column align-items-center justify-content-center`}
        >
          <h4>Démarches</h4>
        </NavLink>
        <NavLink to="/specialistes"
          className={`${styles.homepageLink} ${styles.cardXs} mt-30 d-flex align-items-center justify-content-center`}
        >
          <h4>Spécialistes</h4>
        </NavLink>
        <NavLink to="/services"
          className={`${styles.homepageLink} ${styles.cardXs} mt-30 d-flex align-items-center justify-content-center`}
        >
          <h4>Services</h4>
        </NavLink>
        <NavLink to="/messagerie"
          className={`${styles.homepageLink} ${styles.cardXs} mt-30 d-flex align-items-center justify-content-center`}
        >
          <h4>Messagerie</h4>
        </NavLink>
      </div>
      <div className="d-flex">
        <img
          className={`${styles.homepageImg} ${styles.homepageImgXs}`}
          src={accueil}
          alt="image représentant deux mains jointes"
        />
        <div className={`align-items-center ${styles.homepageText}`}>
          Bienvenue sur Entraidant, un havre virtuel dédié à tisser des liens
          solides et à fournir une assistance inestimable à ceux qui traversent
          des défis physiques, moteurs ou mentaux.
          <p>
            Notre plateforme offre un espace bienveillant où la communauté se
            rassemble pour partager son soutien, son expérience et ses
            ressources.
          </p>{" "}
          <p>
            Que vous soyez en quête de conseils pratiques, d'encouragements
            chaleureux ou simplement d'une oreille attentive, Entraidant est là
            pour vous accompagner à chaque étape de votre parcours. Ensemble,
            nous pouvons surmonter les obstacles et construire un avenir plus
            inclusif et solidaire.
          </p>
          Rejoignez-nous dès aujourd'hui et découvrez la force de l'entraide !
        </div>
      </div>
    </div>
  );
}

export default Homepage;
