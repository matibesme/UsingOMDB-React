import React from "react";
import Pelicula from "./Pelicula";
import Masonry from 'react-masonry-css'

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

function Listado({ resultados, url }) {
  return (
    <div>
      {console.log("Results:", resultados)}
          <Masonry
             breakpointCols={4}
             className="my-masonry-grid"
             columnClassName="my-masonry-grid_column">

        {resultados != null
        ? resultados.Search.map((movie, i) => (
          
              <div class="flex">
                <Pelicula movie={movie} key={i} url={url}/>
              </div>
          
            
          ))
        : null}
      {/* array of JSX items */}
    </Masonry>
     
    </div>
  );
}

export default Listado;
