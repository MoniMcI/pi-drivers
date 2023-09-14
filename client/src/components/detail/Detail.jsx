import React from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import style from './Detail.module.css';

function Detail() {
  const { id } = useParams()  //este id se lo manda Card por props
  const [ driver, setDriver ]= useState({})
  const URL_BASE = 'http://localhost:3001/drivers/' //a esta url del back end llamaremos

  useEffect(() => {
   axios(`${URL_BASE}${id}`).then(({ data }) => {
      if (data.id) {
         setDriver(data);
         console.log(data)
      } else {
         window.alert('No hay drivers con ese ID');
      }
   });
   return setDriver({});
}, [id]);
  
  return (
    <div className={style.fathercontainer}>
      <div className={style.container}>
        <div className={style.leftColumn}>
          <h2 style={{ color: "rgba(251, 196, 158, 0.8)", textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}>Detalle del Driver</h2>
          {/* <h2>Id: { character.id }</h2>      */}
          <h1 className={style.specialFont}>{driver.forename} {driver.surname}</h1>      
          <p>Description {driver.description}</p>

        </div>
        <div className={`${style.rightColumn} ${style.squareImage}`}>
          {driver.img && <img src={driver.img} alt={driver.surname} className={style.circularImage} />}
          </div>
      </div>
    </div>
  )
}

export default Detail;