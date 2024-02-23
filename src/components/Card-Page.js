// Dans CardPage.js
import { useParams } from 'react-router-dom';
import jsonData from '../json/appart.json'; // Importez le fichier JSON
import Banner from './Banner';

function CardPage() {
  const { id } = useParams();
  const stringId = String(id); // Convertissez l'ID en chaîne
  const item = jsonData.find(item => item.id === stringId); // Utilisez la chaîne pour la comparaison

  return (
    <div className="card-page">
        
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      // Affichez toutes les autres informations de l'item ici
    </div>
  );
}

export default CardPage;