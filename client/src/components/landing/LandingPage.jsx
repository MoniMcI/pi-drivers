import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para crear el botón de redireccionamiento
import style from './LandingPage.module.css';; // Crea un archivo CSS para estilizar la página de inicio

function LandingPage() {
  return (
    <div className={style.landingPage}>
      {/* Imagen de fondo */}
      <div className={style.backgroundImage}></div>

      {/* Contenido de la página de inicio */}
      <div className={style.content}>
        <h1>Bienvenido a Mi Proyecto</h1>
        <p>Descripción de tu proyecto aquí.</p>

        {/* Botón para ingresar a la página principal */}
        <Link to="/home" className={style.enterButton}>
          Ingresar
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;