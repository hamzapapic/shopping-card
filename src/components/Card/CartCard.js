import React from "react";
import "./CartCard.css";
import Cart from "../../pages/Cart/Cart.js";
import { useContext } from "react";
export default function CartCard({ title, price, quantity }) {
  return (
    <div className="maincart">
      <div className="singleitem">
        <h2>{title}</h2>
        <h2>{price}</h2>
        <h2>{quantity}</h2>
      </div>
      <div className="quantitybtn">
        <button className="countbtn">+</button>
        <button className="countbtn">-</button>
      </div>
      <div className="quantitybtn">
        <button className="countbtn">REMOVE</button>
      </div>{" "}
    </div>
  );
}
