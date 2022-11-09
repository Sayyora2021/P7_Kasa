import axios from "axios";
import React from "react";
import "../styles/components/cart.scss";
import { useEffect, useState } from "react";
import Flat from "./Flat";

const Cart = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    axios.get("logements.json").then((res) => setCard(res.data));
  }, []);
  return (
    <section className="carts">
      <div className="normTxt">
        {card.map((galery, index) => (
          <Flat key={index} galery={galery} />
        ))}
      </div>
    </section>
  );
};

export default Cart;
