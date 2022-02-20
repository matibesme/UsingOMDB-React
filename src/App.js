import React, { useState, useEffect } from "react";
import "./App.css";
import Buscador from "./Components/Buscador";
import Listado from "./Components/Listado";

const url = "http://www.omdbapi.com/?apikey=fd459a8e&";

function App() {
  const [resultados, setResultados] = useState(null);

  return (
    <div className="App">
      <Buscador setResultados={setResultados} url={url}/>
      <Listado resultados={resultados} url={url}/>
    </div>
  );
}

export default App;
