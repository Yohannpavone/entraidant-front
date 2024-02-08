import logo from "../../../public/img/logoEntraidant.png"
import styles from "../Specialiste/specialiste.module.scss";
import SpecialistesCard from "../SpecialistesCard/SpecialistesCard"; 

function Specialiste() {
    const handleClick = () => {
        
    };

    const items = [
        { nom: 'Dr. Jean Dupont', specialite: 'Orthopédie', location: 'Paris, France' },
        { nom: 'Dr. Marie Leclerc', specialite: 'Neurologie', location: 'Lyon, France' },
        { nom: 'Dr. Philippe Lefevre', specialite: 'Psychiatrie', location: 'Marseille, France' }
    ];

    return (
        <div className={styles.container}>    
        <SpecialistesCard items={items} />
        </div>
    );
}

export default Specialiste;