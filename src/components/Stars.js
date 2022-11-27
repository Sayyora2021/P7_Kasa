import React from "react";
import star from "../assets/img/star.png";
import empty from "../assets/img/starempty.png";

const Stars = ({ rating }) => {
  // on créé un tableau;
  const array = [1, 2, 3, 4, 5];

  return (
    <div>
      {/*arrayStar est un élèment qui parcourit le tableau, s'il est égal ou inf de rating il montre "empty" sinon "star"*/}
      {array.map((arrayStar) =>
        arrayStar >= rating ? (
          <img src={empty} alt="étoile vide" />
        ) : (
          <img src={star} alt="étoile" />
        )
      )}
    </div>
  );
};

export default Stars;
