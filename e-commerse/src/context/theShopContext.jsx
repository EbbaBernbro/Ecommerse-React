import React, { createContext, useState } from "react";
import { PRODUCTLIST } from "../productList";

//In here I define my state and everything related to logic in this project

//Its going to keep track of states and functions that needs på be accecced everywhere in the project.
export const TheShopContext = createContext(null);

//Function that will get the array and create an epty object to represent the initial state of cartProduct
//This function will handle if I add more products to productList.js
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTLIST.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const TheShopContextProvider = (props) => {
  //This state is an object with props
  const [cartProducts, setCartProducts] = useState(getDefaultCart());

  const getTotalPrice = () => {
    let totalPrice = 0;
    //Loop through every item n the cartProducts object to see if there is a value greater than 0, meaning if there is any products in the cart. If there is, grab that value(the amount of them) and multiply times the price of that product and add to the total price
    //Loop through an object:
    for (const product in cartProducts) {
      if (cartProducts[product] > 0) {
        let productInfo = PRODUCTLIST.find(
          //Find is a function in JavaScript where I can a specific element in an array where some part of it satisfy a condition
          (thisProduct) => thisProduct.id === Number(product)
        );
        //cartProducts[product] is the amount of the specific product in the cart
        totalPrice += cartProducts[product] * productInfo.price;
      }
    }
    return totalPrice;
  };

  const addToCart = (productId) => {
    //Sets the cart products object equal to the object it was before and grab this specific product with productId and change it to be what it was before + 1
    setCartProducts((prevValueOfState) => ({
      ...prevValueOfState,
      [productId]: prevValueOfState[productId] + 1,
    }));
  };

  const removeFromCart = (productId) => {
    setCartProducts((prevValueOfState) => ({
      ...prevValueOfState,
      [productId]: prevValueOfState[productId] - 1,
    }));
  };

  // The reason I create a whole component for this is I wanna keep track of all data and orgonize the logic
  //What this component does is defines all the states for my app, define all functions that will be used and then pass it to the provider

  //Value rqeure an object containing all the different states and functions I wanna pass to my provider
  //To get access to the functions somewhere else I add them here
  const contextValue = {
    cartProducts,
    addToCart,
    removeFromCart,
    getTotalPrice,
  };

  return (
    <TheShopContext.Provider value={contextValue}>
      {props.children}
    </TheShopContext.Provider>
  );
};
