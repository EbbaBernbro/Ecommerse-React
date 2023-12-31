import React, { useState } from "react";
import { PRODUCTLIST } from "../../productList";
import { ProductItem } from "./productItem";
import Modal from "../../Components/modal";
import logo from "../../images/logo.png";

import "./theShop.css";

export const TheShop = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleModalClick = (productId) => {
    setSelectedProduct(productId);
    setOpenModal(true);
  };

  return (
    <div className="theShop">
      <div className="logo">
        <img alt="" src={logo}></img>
      </div>

      {/* SEARCH SPECIFIC PRODUCT, !!! NOTE TO MYSELF: FÖRBÄTTRINGSOMRÅDE !!! */}
      <div className="searchTemplate">
        <div className="searchInput">
          <input
            id="search"
            type="text"
            placeholder="🔍 Vad söker du?..."
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
        <div className="">
          {PRODUCTLIST.filter((product) => {
            //If input is empty return no products
            if (searchTerm === "") {
              return null;
            }
            //If product name is matching user input return that/thoese products
            else if (
              product.name
                .toLocaleLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
            ) {
              return product;
            }
          }).map((product, index) => {
            return (
              <div className="resultList" key={index}>
                <ul>
                  <li className="flexContainer">
                    <div className="flexItem1">
                      <img src={product.image} alt="" />
                    </div>

                    <div className="flexItem3">
                      <button
                        className="openModal"
                        onClick={() => {
                          //- 1 Because the array starts from 0 but products from 1 so it selected the next product before
                          handleModalClick(product.id - 1);
                        }}
                      >
                        Mer information om produkten
                      </button>
                    </div>
                    <div className="flexItem2">
                      <span>{product.name}</span>
                      <span>{product.price} kr</span>
                    </div>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      {/* CODE ABOVE = SEARCH SPECIFIC PRODUCT, !!! NOTE TO MYSELF: FÖRBÄTTRINGSOMRÅDE !!! */}

      {/* If openModal is equal to true, render the Modal component */}
      {openModal && (
        <Modal
          exitModal={setOpenModal}
          productInfo={PRODUCTLIST[selectedProduct].info}
        />
      )}

      {/* Loop through every element in the products array because we want to display them/render each product */}
      {/* Therefor I use map and grab the data that comes with them, data = id, name, price, image etc. */}
      {/* We return a component called product */}
      <div className="products">
        {PRODUCTLIST.map((productData, index) => (
          //productData pass the data from each specific product
          //data is a prop that will be all the data being passed
          <ProductItem key={index} data={productData} />
        ))}
      </div>
    </div>
  );
};
