import { Box, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Banner from "../components/banner";
import Product from "../components/product";
import Footer from "../components/footer";
import AppBarCustomize from "../components/appbarcustomize/AppBarCustomize";

export default function Home() {
  useEffect(() => {});
  return (
    <>
      <AppBarCustomize />
      <Container
        fixed
        sx={{
          paddingTop: "40px",
        }}
      >
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
      {/* Footer */}
      <Footer />
    </>
  );
}
