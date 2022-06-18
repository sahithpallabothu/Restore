import { Fragment } from "react";
import { Product } from "../../app/models/product";

interface Props {
  products: Product[];
  addProduct: () => void;
}

const Catalog = ({ products, addProduct }: Props) => {
  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {"Name :" + product.name + "Price :" + product.price}
          </li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </>
  );
};

export default Catalog;
