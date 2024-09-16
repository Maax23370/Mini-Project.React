import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import  XiaomiIcon from "./../../img/xiaomi.png"
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Xiaomi Store</h1>
        <img src={XiaomiIcon} alt="" />
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
