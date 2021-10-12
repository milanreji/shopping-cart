import React from "react";
import "./Card.css";

const Card = ({ products }) => {
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
                <div className="category">Out of stock</div>
              ) : (
                <div className="category">In stock</div>
              )}
            </div>
            <div className="button-centered">
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
