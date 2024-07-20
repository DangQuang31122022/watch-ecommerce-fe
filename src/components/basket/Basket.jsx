import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, Typography, useMediaQuery } from "@mui/material";
import {
  BasketCheckout,
  BasketCheckoutButton,
  BasketEmpty,
  BasketEmptyMsg,
  BasketHeader,
  BasketHeaderTitle,
  BasketList,
  BasketTotalAmount,
  BasketTotalTitle,
} from "../../styles/cart";
import BasketItem from "./BasketItem";
import { clearBasket } from "../../redux/cartSlice";

export default function Basket() {
  const [open, setOpen] = React.useState(false);
  const [isOpenModal, setIsOpeneModal] = React.useState(false);
  const match = useMediaQuery("(max-width:600px)");
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleCheckOut = () => {
    if (!user) {
      setIsOpeneModal(true);
    } else {
      // handle checking out
      // redirect to checkout page
    }
  };

  const DrawerList = (
    <Box
      role="presentation"
      // onClick={toggleDrawer(false)}
      sx={{
        width: match ? "100%" : "40rem",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Modal
        open={isOpenModal}
        onClose={() => setIsOpeneModal(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography>You must be logged in to checking out</Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button onClick={() => setIsOpeneModal(false)}>
              Continue Shopping
            </Button>
            &nbsp;
            <Button
              onClick={() => {
                setIsOpeneModal(false);
                setOpen(false);
              }}
            >
              Login to Checkout
            </Button>
          </Box>
        </Box>
      </Modal>
      <BasketList>
        <BasketHeader>
          <BasketHeaderTitle variant="h5">My Basket</BasketHeaderTitle>
          {/* Close drawer */}
          <Button onClick={toggleDrawer(false)}>Close</Button>
          {/* Clear basket */}
          <Button onClick={() => dispatch(clearBasket())}>Clear Basket</Button>
        </BasketHeader>
        {cart.length <= 0 && (
          <BasketEmpty>
            <BasketEmptyMsg variant="h5">Your basket is empty</BasketEmptyMsg>
          </BasketEmpty>
        )}
        {cart.map((item, index) => (
          <BasketItem key={index} product={item} />
        ))}
      </BasketList>
      <BasketCheckout
        sx={{ marginTop: "auto", padding: 2, borderTop: "1px solid #ccc" }}
      >
        <Box>
          <BasketTotalTitle variant="caption">Subtotal Amout:</BasketTotalTitle>
          <BasketTotalAmount variant="h5">
            {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}$
          </BasketTotalAmount>
        </Box>
        <BasketCheckoutButton
          disabled={cart.length === 0}
          onClick={handleCheckOut}
        >
          Check Out
        </BasketCheckoutButton>
      </BasketCheckout>
    </Box>
  );

  return (
    <>
      <IconButton sx={{ p: 0 }} onClick={toggleDrawer(true)}>
        <ShoppingBagIcon fontSize="large" sx={{ color: "white" }} />
      </IconButton>
      {/* </Badge> */}
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        {DrawerList}
      </Drawer>
    </>
  );
}
