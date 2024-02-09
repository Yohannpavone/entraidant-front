import  { useState } from 'react';
import styles from "./Specialistes.module.scss";
import SpecialistesCard from "../SpecialistesCard/SpecialistesCard";
import axios from 'axios';


export async function SearchAPI(searchTerm) {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/professionnel_de_santes?key=${import.meta.env.VITE_API_KEY}`,
      { searchTerm },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      }
    );
    return response.data.result;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}


function Specialiste() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    console.log("Recherche:", searchTerm);
    try {
      const results = await SearchAPI(searchTerm);
      setSearchResults(results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleButtonClick = (buttonIndex) => {
    console.log(`Button ${buttonIndex} clicked!`);
    
  };

  return (
    <div className={styles.container}>
      <div className="search-bar-container">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Rechercher..."
          />
          <button type="submit">Valider</button>
        </form>
      </div>
      <div className="button-container">
        <button onClick={() => handleButtonClick()}>Nom</button>
        <button onClick={() => handleButtonClick()}>Specialiste</button>
        <button onClick={() => handleButtonClick()}>region/ville/departement</button>
      </div>
      <div className="button-container-liste">
      <button onClick={() => handleButtonClick()}>Afficher la liste</button>
       
      </div>
      {searchResults.length > 0 && (
        <div className="search-results">
          <h2>Résultats de la recherche:</h2>
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
      )}
      <SpecialistesCard items={searchResults} />
    </div>
  );
}

export default Specialiste;