import React from 'react';
import style from './Card.module.css';
import { Link } from 'react-router-dom';

function Card(props) {

    
    const { id, image, forename, surname, teams } = props;
  
  
    return (
      <div className={style.container}>
        <img
          src={image}
          alt={`${forename} ${surname}`} 
          style={{ maxWidth: '100%', maxHeight: '200px' }}  
        />
        {/* este enlace debe establecerse en el route que esta en app.jsx.
        Le paso el id del driver que me vino por props. Desde app.jsx esta
        ruta enlaza con detail.jsx  */}
        <Link to={`/detail/${id}`}>
          <h2>{forename} {surname}</h2>
          <h2>{id}</h2>
        </Link>
        
        <h3>Escuderías: </h3>
        {typeof teams === 'string' ? (
  <p>{teams}</p>
) : Array.isArray(teams) && teams.length > 0 ? (
  <ul>
    {teams.map((team) => (
      <li key={team.id}>{team.name}</li>
    ))}
  </ul>
) : (
  <p>No se encontraron escuderías.</p>
)}

        
        
 
      </div>
    )
  }
  
  export default Card;