import React, { useContext } from "react";
import { TheShopContext } from "../../context/theShopContext";

export const CartProduct = (props) => {
  const { id, name, price, image } = props.data;
  const { cartProducts, addToCart, removeFromCart } =
    useContext(TheShopContext);

  return (
    <div className="productCardCart flexContainerCart">
      <div className="flexItem1Cart">
        <img alt="" src={image} />
      </div>
      <div className="productInfoCart flexItem2Cart gridContainer">
        <div className="gridItem1 spantags">
          <span>{name}</span>
          <span>Pris per produkt: {price} kr</span>
        </div>
        <div className="gridItem2">
          <button onClick={() => removeFromCart(id)}> 🗑️ </button>
        </div>
        <div className="gridItem3">
          <div>Antal tillagda produkter: {cartProducts[id]}</div>
          <button onClick={() => addToCart(id)}> Lägg till fler </button>
        </div>
      </div>
    </div>
  );
};
