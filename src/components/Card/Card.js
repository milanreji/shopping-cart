import React, { useState } from "react";
import "./Card.css";

const Card = ({ products, itemCounter, setItemCounter }) => {
  const [cartArray, setCartArray] = useState([]);

  const clickHandler = (itemId) => {
    setItemCounter((itemCounter += 1));
    products.map((item) => {
      if (item.id === itemId) {
        cartArray.push(products[itemId - 1]);
      }
    });

    let counts = cartArray.reduce((acc, curr) => {
      const str = JSON.stringify(curr.name);
      acc[str] = (acc[str] || 0) + 1;
      return acc;
    }, []);

    console.log(counts);
  };

  console.log(cartArray);

  return (
    <div className="card-wrapper">
      {products.map((item) => (
        <div className="item-container">
          <div className="details-part">
            <div className="image-container">
              <img src={item.image} alt="item-image" />
            </div>
            <div className="content">
              <div className="header">{item.name}</div>
              <div className="price">$ {item.price}</div>
              {item.available < 1 ? (
                <div
                  className="category"
                  style={{ background: "rgba(208,70,69, 0.5)" }}
                >
                  Out of stock
                </div>
              ) : (
                <div
                  className="category"
                  style={{ background: "rgb(232,249,220)" }}
                >
                  In stock
                </div>
              )}
            </div>
            <div className="button-centered">
              <button onClick={() => clickHandler(item.id)}>Add to cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
