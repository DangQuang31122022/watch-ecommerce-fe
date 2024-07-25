import {
  Badge,
  Box,
  Button,
  Container,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import AppBarCustomize from "../../components/appbarcustomize/AppBarCustomize";
import Footer from "../../components/footer";
import { ToastContainer } from "react-toastify";
import React from "react";
import { BorderColorOutlined } from "@mui/icons-material";
import { Colors } from "../../styles/theme";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Account() {
  // const user = {
  //   id: 1,
  //   username: "dang quang",
  //   email: "quang@gmail.com",
  //   phone: "0123456789",
  //   address: "Ha Noi",
  //   banner: "src/images/user/banner1.jpg",
  //   avatar: "src\\images\\user\\avatar1.jpg",
  // };
  const { user } = useSelector((state) => state.user);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBarCustomize />
      <Container
        fixed
        sx={{
          paddingTop: "80px",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Account" {...a11yProps(0)} />
              <Tab label="Order List" {...a11yProps(1)} />
              <Tab label="Whish List" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            {user ? (
              <Profile user={user} />
            ) : (
              <Typography>Not found</Typography>
            )}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Box
              sx={{
                height: "50vh",
              }}
            >
              <Typography variant="h6" gutterBottom fontWeight={700}>
                Order List
              </Typography>
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Box
              sx={{
                height: "50vh",
              }}
            >
              <Typography variant="h6" gutterBottom fontWeight={700}>
                Whish List
              </Typography>
            </Box>
          </CustomTabPanel>
        </Box>
        <ToastContainer />
      </Container>
      <Footer />
    </>
  );
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Profile({ user }) {
  const navigate = useNavigate();
  const handleUpdate = () => {
    navigate("/accountEdit", { state: { user: user } });
  };
  return (
    <>
      {console.log(user)}
      {/* Banner */}
      <Box>
        {/* <Badge
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={
            <Button
              sx={{
                minWidth: 0,
                padding: "5px",
                borderRadius: "50%",
                border: "1px solid #fff",
                position: "relative",
                right: "25px",
                bottom: "25px",
                backgroundColor: "#000",
              }}
              variant="rounded"
            >
              <BorderColorOutlined sx={{ color: "#fff" }} />
            </Button>
          }
          sx={{ width: "100%" }}
        > */}
        <Box sx={{ width: "100%" }}>
          {user && user.url_banner ? (
            <img
              src={user.url_banner}
              alt="banner"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "200px",
                backgroundColor: "#f0f0f0",
              }}
            />
          )}
        </Box>
        {/* </Badge> */}
      </Box>
      {/* Avatar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          position: "relative",
          top: "-30px",
          left: "20px",
        }}
      >
        {/* <Badge
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={
            <Button
              sx={{
                minWidth: 0,
                padding: "5px",
                borderRadius: "50%",
                border: "1px solid #fff",
                position: "relative",
                right: "15px",
                bottom: "15px",
                backgroundColor: "#000",
              }}
              variant="rounded"
            >
              <BorderColorOutlined sx={{ color: "#fff" }} />
            </Button>
          }
        > */}
        <img
          src={user.url_avatar}
          alt="avatar"
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        />
        {/* </Badge> */}
      </Box>
      {/* User Info */}
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={700}>
          {user.full_name}
        </Typography>
        <Typography variant="body1" gutterBottom fontWeight={700}>
          Email
        </Typography>
        <Typography variant="body1" gutterBottom>
          {user.email}
        </Typography>
        <Typography variant="body1" gutterBottom fontWeight={700}>
          Phone
        </Typography>
        <Typography variant="body1" gutterBottom>
          {user.phone}
        </Typography>
        <Typography variant="body1" gutterBottom fontWeight={700}>
          Address
        </Typography>
        <Typography variant="body1" gutterBottom>
          {user.address}
        </Typography>
      </Box>
      {/* Button UPDATE */}
      <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            width: "10%",
            padding: "10px",
            borderRadius: "5px",
            marginRight: 2,
            backgroundColor: Colors.primary,
            "&:hover": {
              backgroundColor: "#000",
            },
          }}
          onClick={handleUpdate}
        >
          Update
        </Button>
      </Box>
    </>
  );
}
