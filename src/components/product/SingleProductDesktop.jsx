import { useCallback, useEffect, useState } from "react";
import {
  Product,
  ProductActionButton,
  ProductActionsWrapper,
  ProductAddToCart,
  ProductFavButton,
  ProductImage,
} from "../../styles/product";
import { Stack, Tooltip, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";

import ProductDetail from "../productdetail";
import ProductMeta from "./ProductMeta";
// import { useUIContext } from "../../context/ui";
import useDialogModal from "../../hooks/useDialogModal";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

export default function SingleProductDesktop({ width, product, matches }) {
  const [ProductDetailDialog, showProductDetailDialog, closeProductDialog] =
    useDialogModal(ProductDetail);
  // NEW: add to cart
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    // Dispatch an action to toggle product in cart

    // duplicate product to avoid reference
    let product1 = { ...product, quantity: 1 };
    dispatch(addToCart(product1));
  };

  const [showOptions, setShowOptions] = useState(false);

  // const { cart, setCart } = useUIContext();

  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };

  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage width={width} src={product.imgURL} />
        <ProductFavButton isfav={0}>
          <FavoriteIcon />
        </ProductFavButton>
        {(showOptions || matches) && (
          <ProductAddToCart
            onClick={() => handleAddToCart(product)}
            show={showOptions}
            variant="contained"
          >
            Add to cart
            {/* {cart.findIndex((c) => c.id === product.id) ? "Add to cart" : "Remove from cart"} */}
          </ProductAddToCart>
        )}
        <ProductActionsWrapper
          show={showOptions || matches ? "true" : undefined}
        >
          <Stack direction={matches ? "row" : "column"}>
            <ProductActionButton>
              <Tooltip placement="left" title="share this product">
                <ShareIcon color="primary" />
              </Tooltip>
            </ProductActionButton>
            <ProductActionButton onClick={() => showProductDetailDialog()}>
              <Tooltip placement="left" title="Full view">
                <FitScreenIcon color="primary" />
              </Tooltip>
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      <ProductMeta product={product} />
      <ProductDetailDialog product={product} />
    </>
  );
}
