import { Box, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppBarCustomize from "../components/AppBarCustomize";
import Banner from "../components/banner";
import Product from "../components/product";
// import Banner from "../components/banner";

export default function Home() {
  useEffect(() => {});
  return (
    <>
      <AppBarCustomize />
      <Container fixed>
        <Box
          sx={{
            width: "100%",
          }}
        >
          {/* Banner */}
          <Banner />
          {/* Content */}
          <Product />
        </Box>
        <ToastContainer />
      </Container>
    </>
  );
}
