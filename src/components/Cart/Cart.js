import React from "react";

const Cart = ({ isExpanded, setIsExpanded }) => {
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
      {/* <div>
        <div>
          <img src="" alt="" />
          <p></p>
          <p></p>
        </div>
      </div> */}
    </div>
  );
};

export default Cart;
