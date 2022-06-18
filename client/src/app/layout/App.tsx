import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/catalog";
import { Product } from "../models/product";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5059/api/Products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addProductHandler = () => {
    setProducts((prevstate) => [
      ...prevstate,
      {
        id: prevstate.length + 101,
        name: "product" + prevstate.length + 1,
        description: "Some thing",
        price: 100,
        pictureUrl: "http:// picsum.photos/200",
        brand: "Some Brand",
      },
    ]);
  };
  return (
    <div className="App">
      <h1>Restore</h1>
      <Catalog products={products} addProduct={addProductHandler} />
    </div>
  );
}

export default App;
