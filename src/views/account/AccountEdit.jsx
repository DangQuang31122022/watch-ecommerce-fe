import {
  Badge,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import AppBarCustomize from "../../components/appbarcustomize/AppBarCustomize";
import Footer from "../../components/footer";
import { BorderColorOutlined, Margin } from "@mui/icons-material";
import { Colors } from "../../styles/theme";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { updateMe } from "../../redux/userSlice";
import { UserAPI } from "../../api/UserAPI";
import { useLocation, useNavigate } from "react-router-dom";

export default function AccountEdit() {
  // const user = {
  //   id: 1,
  //   username: "dang quang",
  //   email: "quang@gmail.com",
  //   phone: "0123456789",
  //   address: "Ha Noi",
  //   banner: "src\\images\\user\\banner2.png",
  //   avatar: "src\\images\\user\\avatar1.jpg",
  // };
  const location = useLocation();
  const { user } = location.state || {};
  // const { user } = useSelector((state) => state.user);

  const [full_name, setFull_Name] = useState(user.full_name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [address, setAddress] = useState(user.address);
  const [url_avatar, setUrl_Avatar] = useState(user.url_avatar);
  const [url_banner, setUrl_Banner] = useState(user.url_banner);
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const avtarRef = useRef(null);
  const handleButtonClick = () => {
    avtarRef.current.click();
  };

  const update = async ({ userUpdate }) => {
    const data = await UserAPI.updateMe(userUpdate);
    console.log(data);
    if (data) {
      dispatch(updateMe(data));
      setFull_Name(user.full_name);
      setEmail(user.email);
      setPhone(user.phone);
      setAddress(user.address);
    }
  };

  const handleUpdate = () => {
    if (
      !/^[a-zA-Z\sáàảãạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵđĐ]+$/.test(
        full_name
      )
    ) {
      alert("Invalid username");
      return;
    }
    if (!/^[0-9]{10}$/.test(phone)) {
      alert("Invalid phone number");
      return;
    }
    if (!address) {
      alert("Address is required");
      return;
    }
    const userUpdate = {
      ...user,
      full_name: full_name,
      email: email,
      phone: phone,
      address: address,
      role: "",
    };
    console.log(userUpdate);
    update({ userUpdate });
    navigator("/account");
  };
  if (!user) {
    return (
      <>
        <AppBarCustomize />
        <Container
          fixed
          sx={{
            paddingTop: "80px",
          }}
        >
          <Typography variant="h4" align="center" mt={2}>
            Please login to view this page
          </Typography>
        </Container>
        <Footer />
      </>
    );
  }
  return (
    <>
      <AppBarCustomize />
      {user ? (
        <Container
          fixed
          sx={{
            marginTop: "80px",
          }}
        >
          {/* Banner */}
          <Box mt={2}>
            <Badge
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
            >
              <Box sx={{ width: "100%" }}>
                {user && user.url_banner ? (
                  <img
                    src={url_banner}
                    alt="banner"
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
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
            </Badge>
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
            <Badge
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
                  onClick={handleButtonClick}
                >
                  <BorderColorOutlined sx={{ color: "#fff" }} />
                  <input
                    ref={avtarRef}
                    type="file"
                    accept="image/*"
                    hidden
                    multiple={true}
                    onChange={(e) => {
                      const file = e.target.files[0];
                      const reader = new FileReader();
                      reader.onload = () => {
                        setUrl_Avatar(reader.result);
                      };
                      reader.readAsDataURL(file);
                    }}
                  />
                </Button>
              }
            >
              <img
                src={url_avatar}
                alt="avatar"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                }}
              />
            </Badge>
          </Box>
          {/* User Info */}
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1" gutterBottom>
              *full name
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              value={full_name}
              size="small"
              name="full_name"
              required
              onChange={(e) => setFull_Name(e.target.value)}
            />
            <Typography variant="body1" gutterBottom>
              Email
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              value={email}
              size="small"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <Typography variant="body1" gutterBottom>
              Phone
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              value={phone}
              size="small"
              name="phone"
              required
              onChange={(e) => setPhone(e.target.value)}
            />
            <Typography variant="body1" gutterBottom>
              Address
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              value={address}
              size="small"
              name="address"
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </Box>
          {/* Button UPDATE */}
          <Box
            sx={{ mt: 2, mb: 2, display: "flex", justifyContent: "flex-end" }}
          >
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
              SAVE
            </Button>
          </Box>
        </Container>
      ) : (
        <Typography variant="h4" align="center" mt={2}>
          Please login to view this page
        </Typography>
      )}
      <Footer />
    </>
  );
}
