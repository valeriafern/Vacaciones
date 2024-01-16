import React, { useState } from 'react';
import './style.css'; 

const App = () => {
  const [mostrarRespuesta, setMostrarRespuesta] = useState(false);

  const manejarClicSi = () => {
    setMostrarRespuesta(true);
  };

  const manejarMouseEnterNo = (event) => {
    // Mueve el botón a una posición diferente al pasar el mouse sobre él
    event.target.style.transform = 'translateX(50px)';
  };

  const manejarMouseLeaveNo = (event) => {
    // Restaura la posición original al dejar de pasar el mouse sobre el botón
    event.target.style.transform = 'translateX(0)';
  };

  return (
    <div className="contenedor">
      <h1 className="encabezado">¿Me amas?</h1>
      <div className="botones">
        <button onClick={manejarClicSi} className="boton">Sí</button>
        <button
          onMouseEnter={manejarMouseEnterNo}
          onMouseLeave={manejarMouseLeaveNo}
          className="boton"
        >
          No
        </button>
      </div>
      {mostrarRespuesta && <p className="respuesta">Lo sabía</p>}
    </div>
  );
};

export default App;

