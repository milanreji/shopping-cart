import React, { useState, useEffect } from "react";
import Cart from "../Cart/Cart";
import "./Navbar.css";

const Navbar = ({ itemCounter, products, cartArray }) => {
  const clickHandler = () => {
    setIsExpanded(!isExpanded);
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }
  const navbar_style = navbarClasses.join(" ");

  return (
    <div>
      <nav className={navbar_style}>
        <p>REACT SHOPPING CART</p>
        <i onClick={clickHandler} className="fas fa-shopping-cart fa-3x"></i>
        <div className="counter">{itemCounter}</div>
      </nav>
      <Cart
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        products={products}
        cartArray={cartArray}
      />
    </div>
  );
};

export default Navbar;
