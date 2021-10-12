import { useState } from "react";
import Card from "./components/Card/Card";
import { products } from "./productData";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  const [itemCounter, setItemCounter] = useState(0);

  return (
    <div className="App">
      <Navbar itemCounter={itemCounter} />
      <Card
        products={products}
        itemCounter={itemCounter}
        setItemCounter={setItemCounter}
      />
    </div>
  );
}

export default App;
