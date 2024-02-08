import logo from "../../../public/img/logoEntraidant.png";
// eslint-disable-next-line no-unused-vars
import styles from"../../pages/SpecialistesCard/SpecialistesCard.module.scss"

function SpecialistesCard({ items }) {
    const handleClick = () => {
       
    };

    return (
        <div>
            <img src={logo} alt="Entraidant logo" />
            {items.map((item, index) => (
                <div key={index} className="specialistesCard">
                    <h3>{item.nom}</h3>
                    <p>Spécialité: {item.specialite}</p>
                    <p>Localisation: {item.location}</p>

                    <div className="Name">
                        <button onClick={() => handleClick('/nom-page')}>Voir profil</button>
                    </div>

                    <div className="specialiste">
                        <button onClick={() => handleClick('/specialite-page')}>En savoir plus</button>
                    </div>

                    <div className="location">
                        <button onClick={() => handleClick('/localisation-page')}>Voir sur la carte</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SpecialistesCard;
