// import axios from "axios";
import React from "react";
import { useState } from "react";
import Flat from "./Flat";
import locations from "../logements.json";

const Cart = () => {
  const [card] = useState([]);
  console.log(locations);
  <div>test{card}</div>;
  // useEffect(() => {
  //   axios.get("logements.json").then((res) => setCard(res.data));
  // }, []);
  return (
    <section className="carts">
      <div className="normTxt">
        {locations.map((flat, index) => (
          <Flat key={index} flat={flat} />
        ))}
        ;
      </div>
    </section>
  );
};

export default Cart;
