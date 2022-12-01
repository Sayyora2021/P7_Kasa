import React from "react";
import star from "../../assets/img/star.png";
import empty from "../../assets/img/starempty.png";

const Rate = ({ rating }) => {
  // on créé un tableau;
  const array = [1, 2, 3, 4, 5];

  return (
    <div className="stars">
      {/*arrayStar est un élèment qui parcourit le tableau, s'il est égal ou inf de rating il montre "empty" sinon "star"*/}
      {array.map((arrayStar, key) =>
        arrayStar >= rating ? (
          <img key={key} src={empty} alt="étoile vide" />
        ) : (
          <img key={key} src={star} alt="étoile pleine" />
        )
      )}
    </div>
  );
};

export default Rate;
