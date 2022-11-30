import React, { useState } from "react";
import vector from "../assets/img/vector.svg";

const Carousel = ({ pictures }) => {
  //photo actuelle, on le met dans state
  const [currentPhoto, setCurrentPhoto] = useState(0);
  //longeur du tableau des photos
  const photosLength = pictures.length;

  //photo suivante égale au longeur du tableau et on inc +1
  function nextSlide() {
    //setCurrentPhoto(currentPhoto === 0 ? photosLength - 1 : currentPhoto - 1);
    currentPhoto === 0
      ? setCurrentPhoto(photosLength - 1)
      : setCurrentPhoto(currentPhoto - 1);
  }

  // photo précedente égale à 0 on decrémente -1 de photo actuelle
  function preSlide() {
    // setCurrentPhoto(currentPhoto === photosLength - 1 ? 0 : currentPhoto + 1);
    currentPhoto === photosLength - 1
      ? setCurrentPhoto(0)
      : setCurrentPhoto(currentPhoto + 1);
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
