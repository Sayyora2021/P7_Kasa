import React from "react";
//import { useState } from "react";
import Flat from "./Flat";
import locations from "../../logements.json";

const Cart = () => {
  // const [card] = useState([]);

  // <div>test{card}</div>;
  return (
    <main className="carts">
      <section className="normTxt">
        {locations.map((flat, index) => (
          <Flat key={index} flat={flat} />
        ))}
      </section>
    </main>
  );
};

export default Cart;
