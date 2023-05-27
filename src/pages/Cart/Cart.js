import React from "react";
import { useState, useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import CartCard from "../../components/Card/CartCard";

export default function Cart() {
  const { cart } = useContext(AppContext);

  return (
    <div>
      {cart.map((items) => (
        <CartCard
          title={items.title}
          price={items.price}
          quantity={items.quantity}
        />
      ))}
    </div>
  );
}
