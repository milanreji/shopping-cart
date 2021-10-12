import { useState } from "react";
import Card from "./components/Card/Card";
import { products } from "./productData";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  const [itemCounter, setItemCounter] = useState(0);
  const [cartArray, setCartArray] = useState([]);

  return (
    <div className="App">
      <Navbar
        itemCounter={itemCounter}
        products={products}
        cartArray={cartArray}
      />
      <Card
        products={products}
        itemCounter={itemCounter}
        setItemCounter={setItemCounter}
        cartArray={cartArray}
      />
    </div>
  );
}

export default App;
