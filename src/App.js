import React, { useState } from 'react';
import './style.css';

const App = () => {
  const [mostrarRespuesta, setMostrarRespuesta] = useState(false);
  const [mostrarTexto, setMostrarTexto] = useState(false);
  const [botonesDeshabilitados, setBotonesDeshabilitados] = useState(false);

  const manejarClicSi = () => {
    setMostrarRespuesta(true);
    setBotonesDeshabilitados(true);
  };

  const manejarMouseEnterNo = (event) => {
    if (!botonesDeshabilitados) {
      const xPos = Math.random() * (window.innerWidth - 100);
      const yPos = Math.random() * (window.innerHeight - 40);
      event.target.style.transform = `translate(${xPos}px, ${yPos}px)`;
      setMostrarTexto(true);
    }
  };

  const manejarMouseLeaveNo = (event) => {
    if (!botonesDeshabilitados) {
      event.target.style.transform = 'translate(0, 0)';
      setMostrarTexto(false);
    }
  };

  return (
    <div className="contenedor">
      <h1 className="encabezado">¿Me amas?</h1>
      <div className="botones">
        <button onClick={manejarClicSi} className="boton" disabled={botonesDeshabilitados}>
          Sí
        </button>
        <button
          onMouseEnter={manejarMouseEnterNo}
          onMouseLeave={manejarMouseLeaveNo}
          className="boton"
          disabled={botonesDeshabilitados}
        >
          No
        </button>
      </div>
      {mostrarTexto && !botonesDeshabilitados && (
        <p className="textoAdicional">¿Qué intentas hacer?</p>
      )}
      {mostrarRespuesta && <p className="respuesta">Lo sabía</p>}
    </div>
  );
};

export default App;
