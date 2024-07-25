import { Typography } from "@mui/material";
import { ProductMetaWrapper } from "../../styles/product";
export default function ProductMeta({ product, matches }) {
  return (
    <ProductMetaWrapper>
      <Typography
        textTransform="capitalize"
        variant={matches ? "body1" : "body2"}
        lineHeight={2}
      >
        {product.name}
      </Typography>
      <Typography variant={matches ? "caption" : "subtitle2"}>
        $ {product.price}
      </Typography>
    </ProductMetaWrapper>
  );
}
