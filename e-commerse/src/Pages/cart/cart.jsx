import React, { useContext } from "react";
import { PRODUCTLIST } from "../../productList";
import { TheShopContext } from "../../context/theShopContext";
import { CartProduct } from "./cartProduct";
import "./cart.css";

export const Cart = () => {
  const { cartProducts, getTotalPrice } = useContext(TheShopContext);
  const totalPrice = getTotalPrice();

  return (
    <div className="cart">
      <div>
        <h1>Min varukorg</h1>
      </div>
      <div className="cartProducts">
        {/* Grab the productlist and grab each product, we don't want to display all the products but to only display the products from the products' array that are also in the cart*/}
        {PRODUCTLIST.map((productData, index) => {
          //if the cartProducts object with the key setCartProducts equals to the id has a value greater than zero
          if (cartProducts[productData.id] !== 0) {
            return <CartProduct key={index} data={productData} />;
          }
        })}
      </div>
      <div>
        <h4 className="totalPrice">
          Totalpris <span>inkl. moms</span> {totalPrice} kr
        </h4>
      </div>
    </div>
  );
};
