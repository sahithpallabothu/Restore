import { Grid } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./productCard";

interface Props {
  products: Product[];
}

const productList = ({ products }: Props) => {
  return (
    <Grid container spacing={4}>
      {products.map((product) => (
        <Grid item key={product.id} xs={3}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default productList;
