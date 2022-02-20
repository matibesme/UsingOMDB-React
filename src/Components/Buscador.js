import React, { useState } from "react";
import swal from 'sweetalert';



function Buscador({ setResultados, url }) {
  const [pelicula, setPelicula] = useState({
    title: "",
    year: "",
    type: "",
  });

  const { title, year, type } = pelicula;

  const buscar = () => { 
    if (title != "") {
      var urlFetch = `${url}&s=${title.replace(
        " ",
        "+"
      )}&type=${type}&y=${year}`;
      console.log(urlFetch);
      fetch(urlFetch)
        .then((data) => data.json())
        .then((data) => {
          console.log(data.Response);
          if (data.Response == "True") {
            setResultados(data);
            swal("Good job!", "Busqueda exitosa!", "success");
          } else {
       
            swal("Error!", "No encontramos tu criterio", "error");
          }
        });
    } else {
      alert("Please enter a valid audiovisual product");
    }
  };

  const inputsOnChange = (e) => {
    setPelicula({
      ...pelicula,
      [e.target.id]: e.target.value,
    });
  };

  return (

    <header class="masthead">
    <div class="container position-relative">
        <div class="row justify-content-center">
            <div class="col-xl-6">
                <div class="text-center text-white">
                   
                    <h1 class="mb-5">Find your favorites series and movies</h1>
                  
                    <input class="form-control form-control-lg " id="title" type="search" placeholder="Ingrese pelicula" value={title}
                      onChange={inputsOnChange} />

                    
                    <br></br>
                    <div class="input-group mb-3 col-4">
                        <label class="input-group-text" for="inputGroupSelect01">Type</label>
                        <select class="form-select"  name="opciones"
                                            id="type"
                                            value={type}
                                            onChange={inputsOnChange}
                        
                        >
                         <option selected>Choose...</option>
                          <option value="movie">Movie</option>
                          <option value="series">Serie</option>
                          <option value="episode">Episode</option>
                         </select>
    </div>
    
                    <input
                      className="mt-2 mb-1 barraBuscarAño"
                      id="year"
                      type="number"
                      placeholder=" Year..."
                      maxLength="4"
                      value={year}
                      onChange={inputsOnChange}
                    />


                   
                  
                    <br></br>
                    <div class="col-auto"><button class="btn btn-primary btn-lg mt-3" id="buscar" onClick={buscar} >Search  <i className="fa fa-search"></i> </button></div>
                    
                  </div>
                    </div>
                   </div>
                </div>
      <br></br>

      </header>

  
  );
}

export default Buscador;
