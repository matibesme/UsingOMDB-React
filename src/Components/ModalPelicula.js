import React from "react";
import Modal from "react-modal";



function ModalPelicula({ movieAct, setIsOpen, modalIsOpen }) {
  const { Title, Year, Actors, Poster, Plot, Director, Runtime, Genre, Country,imdbRating } = movieAct;

  function closeModal() {
    setIsOpen(false);
  }
  return (
    
   <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
       
        
      >
        <div class="modal fade" id="myModal"></div>
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{Title}</h5>
                </div>
                <div class="modal-body" id="modal-info">

               <center> <img src={Poster} alt="${data.Title}"/></center>
                    <div>
                        <p>{Plot}</p>
                        <p>Director: {Director}</p>
                        <p>Actors: {Actors}</p>
                        <p>Year: {Year}</p>
                        <p>Runtime: {Runtime}</p>
                        <p>Genre: {Genre}</p>
                        <p>Country: {Country}</p>
                        <p>IMDB rating: {imdbRating}</p>
                        <a href="https://www.imdb.com/title/${data.imdbID}/?ref_=nv_sr_srsg_0">Link a IMDB</a>
                    </div> </div>
                <div class="modal-footer">
                    <button type="button" class="btn" data-bs-dismiss="modal" onClick={closeModal}>Close</button>
                </div>
            </div>
        </div>
   
      </Modal>  
   
  );
}

export default ModalPelicula;
