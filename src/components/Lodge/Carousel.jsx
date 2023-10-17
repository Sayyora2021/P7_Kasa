import React, { useState } from "react";
import vector from "../../assets/img/vector.svg";

const Carousel = ({ pictures }) => {
  //photo actuelle, on le met dans state
  const [currentPhoto, setCurrentPhoto] = useState(0);
  //longeur du tableau des photos
  const photosLength = pictures.length;

  //photo actuel est egale à 0, on montre -1 de array, sinon photo actuelle -1
  function nextSlide() {
    currentPhoto === 0
      ? setCurrentPhoto(photosLength - 1)
      : setCurrentPhoto(currentPhoto - 1);
  }

  // photo actuelle est égale à dernière photo, on montre 1re sinon photo actuelle +1
  function preSlide() {
    currentPhoto === photosLength - 1
      ? setCurrentPhoto(0)
      : setCurrentPhoto(currentPhoto + 1);
  }
  // tous les photos = sup de 1
  const allPhotos = photosLength > 1;

  return (
    <div className="photo">
      <img
        className="imgSize"
        src={pictures[currentPhoto]}
        alt="photos l'intérieur"
      />

      {allPhotos && (
        <img
          className="vectorRight"
          onClick={() => {
            nextSlide();
          }}
          src={vector}
          alt="suivante"
        />
      )}
      {allPhotos && (
        <img
          className="vectorLeft"
          onClick={() => {
            preSlide();
          }}
          src={vector}
          alt="précedente"
        />
      )}
      {allPhotos && (
        <p>
          {currentPhoto + 1}/{photosLength}
        </p>
      )}
    </div>
  );
};

export default Carousel;
