import React, { useContext } from "react";
import { TheShopContext } from "../../context/theShopContext";

export const CartProduct = (props) => {
  const { id, name, price, image } = props.data;
  const { cartProducts, addToCart, removeFromCart } =
    useContext(TheShopContext);

  return (
    <div className="productCard">
      <img alt="" src={image} />
      <div className="productInfo">
        <p>{name}</p>
        <p>{price} kr</p>
        <div className="amountOfProductsHandler">
          <button onClick={() => removeFromCart(id)}> 🗑️ </button>
          {/* <input value={cartProducts[id]} /> */}
          <div>{cartProducts[id]}</div>
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
