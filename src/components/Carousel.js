import React, { useState } from "react";
import vector from "../assets/img/vector.svg";

const Carousel = ({ pictures }) => {
  //photo actuelle, on le met dans state
  const [currentPhoto, setCurrentPhoto] = useState(0);
  //longeur du tableau des photos
  const photosLength = pictures.length;

  //photo suivante égale au longeur du tableau et on inc +1
  function nextPhoto() {
    setCurrentPhoto(currentPhoto === photosLength - 1 ? 0 : currentPhoto + 1);
  }

  // photo précedente égale à 0 on decrémente -1 de photo actuelle
  function prePhoto() {
    setCurrentPhoto(currentPhoto === 0 ? photosLength - 1 : currentPhoto - 1);
  }
  // tous les photos est inf de 1
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
            nextPhoto();
          }}
          src={vector}
          alt="suivante"
        />
      )}
      {allPhotos && (
        <img
          className="vectorLeft"
          onClick={() => {
            prePhoto();
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
