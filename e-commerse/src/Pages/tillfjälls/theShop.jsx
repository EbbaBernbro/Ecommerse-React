import React from "react";
import { PRODUCTLIST } from "../../productList";
import { ProductItem } from "./productItem";
import "./theShop.css";

export const TheShop = () => {
  return (
    <div className="theShop">
      <div className="title">
        <h2> tillFJÄLLS </h2>
      </div>
      {/* Loop through every element in the products array because we want to display them/render each product */}
      {/* Therefor I use map and grab the data that comes with them, data = id, name, price, image etc. */}
      {/* We return a component called product */}
      <div className="products">
        {PRODUCTLIST.map((productData, index) => (
          //productDatapass, the data from each specific product
          //data is a prop that will be all the data being passed
          //
          <ProductItem key={index} data={productData} />
        ))}
      </div>
    </div>
  );
};
