import React, { useState } from "react";
import "./Cart.css";

const Cart = ({ isExpanded, setIsExpanded, cartArray }) => {
  let [qty, setQty] = useState(1);
  const filteredArray = [...new Set(cartArray)];

  return (
    <div className={isExpanded ? "cart-wrapper" : "cart-wrapper collapsed"}>
      <i
        onClick={() => setIsExpanded(false)}
        className="fas fa-times"
        style={{ fontSize: "30px" }}
      ></i>
      <div className="cart-header">
        <div>
          <i className="fas fa-shopping-cart fa-3x"></i>CART
        </div>
      </div>
      {filteredArray.map((item) => {
        item.qty = qty;
        return (
          <div className="cart-container">
            <img className="cart-img" src={item.image} alt="" />

            <div className="with-buttons">
              <div className="item-info">
                <div>{item.name}</div>
                <div>${item.price}</div>
                <div>Quantity:{item.qty}</div>
              </div>
              <div className="two-buttons">
                <button onClick={() => setQty((item.qty += 1))}>+</button>
                <button onClick={() => setQty((item.qty -= 1))}>-</button>
              </div>
            </div>
          </div>
        );
      })}
      <button
        className="purchase"
        onClick={() =>
          alert(
            "Purchased items are" + " " + filteredArray.map((item) => item.name)
          )
        }
      >
        Purchase
      </button>
      ;
    </div>
  );
};

export default Cart;
