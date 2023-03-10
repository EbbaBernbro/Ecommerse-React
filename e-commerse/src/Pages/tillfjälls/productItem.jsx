import React, { useContext } from "react";
import { TheShopContext } from "../../context/theShopContext";

//What exists in this componentn is ui for each product/item in my shop

//Here we grab the props and from props.data we get all the data that each product has (id, name, etc)
export const ProductItem = (props) => {
  const { id, name, price, image } = props.data;
  const { addToCart, cartProducts } = useContext(TheShopContext);
  const amountOfProductsInCart = cartProducts[id];

  return (
    <div className="productCard">
      <div className="pt1">
        <img alt="" src={image} />
      </div>
      <div className="pt2">
        <div className="productInfo">
          <span>{name}</span>
          <span>{price} kr</span>
        </div>
        <button className="addToCart" onClick={() => addToCart(id)}>
          {/* If the amount of this (id) specific id is greater than 0 then we want to display the amount*/}
          {/* && conditional rendering?? */}
          Lägg till
          {amountOfProductsInCart > 0 && <> ({amountOfProductsInCart}) </>}
        </button>
      </div>
    </div>
  );
};
