import Header from "../../components/Header/Header"; 
import logo from "../../../public/img/logoEntraidant.png";
import styles from "./QuiSommesNous.module.scss"; 

function QuiSommesNous() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Qui sommes-nous ?</h1>
          <p>
            Bienvenue sur Entraidant, un havre virtuel dédié à tisser des liens solides et à fournir une assistance inestimable à ceux qui traversent des défis physiques, moteurs ou mentaux. Notre plateforme offre un espace bienveillant où la communauté se rassemble pour partager son soutien, son expérience et ses ressources. Que vous soyez en quête de conseils pratiques, d'encouragements chaleureux ou simplement d'une oreille attentive, Entraidant est là pour vous accompagner à chaque étape de votre parcours. Ensemble, nous pouvons surmonter les obstacles et construire un avenir plus inclusif et solidaire. Rejoignez-nous dès aujourd'hui et découvrez la force de l'entraide !
          </p>
        </div>
      </div>
    </div>
  );
}

export default QuiSommesNous;
