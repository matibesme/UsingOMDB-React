import React, { useState } from "react";
import ModalPelicula from "./ModalPelicula";

function Pelicula({ movie, url }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [movieAct, setMovieAct] = useState(false);

  function openModal() {
    buscarID(movie.imdbID);
    setIsOpen(true);
  }

  const buscarID = (id) => {
    var urlID = `${url}&i=${id}`;

    fetch(urlID)
      .then((data) => data.json())
      .then((data) => {
        /* LLamada a la api */
        console.log(data);
        setMovieAct(data);
      });
  };

  return (



    <div class="card ">
        <img class="card-img-top" src={movie.Poster} alt="Card image cap" ></img>
        <div class="card-body">
         
          <p class="card-text"> <h5>{movie.Title}</h5>
          <h5>{movie.Year}</h5>
          <h5>{movie.Type}</h5></p>
          <button type="button" class="btn btn-danger" onClick={openModal}>
          Ver Mas
          </button>     
        </div>
        <ModalPelicula
        movieAct={movieAct}
        setIsOpen={setIsOpen}
        modalIsOpen={modalIsOpen}
        />
    </div>

    
  );
}

export default Pelicula;
