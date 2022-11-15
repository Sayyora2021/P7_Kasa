// import axios from "axios";
import React from "react";
import "../styles/components/cart.scss";
import { useState } from "react";
import Flat from "./Flat";
import data from "./Data";

const Cart = () => {
  const [card] = useState([]);
  console.log(data);
  <div>test{card}</div>;
  // useEffect(() => {
  //   axios.get("logements.json").then((res) => setCard(res.data));
  // }, []);
  return (
    <section className="carts">
      <div className="normTxt">
        {data.map((flat, index) => (
          <Flat key={index} flat={flat} />
        ))}
        ;
      </div>
    </section>
  );
};

export default Cart;
