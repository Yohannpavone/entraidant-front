import { useNavigate } from 'react-router-dom';
import './Demarches_module.scss'; // Assurez-vous que ce chemin est correct

function Demarches() {
  const navigateTo = useNavigate();

  const redirectToAnotherPage = () => {
    navigateTo("/autre-page");
  };

  return ( 
    <div className="container">
      <div className="button-container">
        <button type="button" onClick={redirectToAnotherPage}>Demarches administratives</button>
      </div>
      <div className="button-container">
        <button type="button" onClick={redirectToAnotherPage}>Aide financière</button>
      </div>
    </div>
  );
}

export default Demarches;