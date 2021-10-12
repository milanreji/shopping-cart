import Card from "./components/Card/Card";
import { products } from "./productData";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <p>shopping-cart</p>
      </nav>
      <Card products={products} />
    </div>
  );
}

export default App;
