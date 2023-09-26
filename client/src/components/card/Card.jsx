import React from 'react';
import style from './Card.module.css';
import { Link } from 'react-router-dom';
import noImage from "../../assets/defaultImagePI.png";


function Card(props) {

    const { id, image, forename, surname, teams, dob } = props;
    return (
      <div className={style.container}>
        { image?(
      
        <img
          src={image}
          alt={`${forename} ${surname}`} 
          className={style.image}           
        />)
        : (<img
        src={noImage}
        alt={`${forename} ${surname}`} 
        className={style.image}           
      /> )
        }


        <Link to={`/detail/${id}`}>
          
          <h3 classname={style.name}>{forename} {surname}</h3>
          {/* <h2>{id}</h2>  */}
        </Link>
        <div>Dob {dob}</div>
        <h4>Teams: </h4>
        {typeof teams === 'string' 
          ? (<p className={style.overflowVisible}>{teams}</p>) 
          : Array.isArray(teams) && teams.length > 0 
            ? (
              <p className={style.overflowVisible} >
              {teams.map((team, index) => (
                index === teams.length - 1 ? team.name : `${team.name}, `
              ))}
            </p>
              ) 
            : (
                <p>No se encontraron escuderías.</p>
              )}
              
      </div>
    )
  }
  
  export default Card;