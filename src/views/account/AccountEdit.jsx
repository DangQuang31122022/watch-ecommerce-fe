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
import { BorderColorOutlined } from "@mui/icons-material";
import { Colors } from "../../styles/theme";

export default function AccountEdit() {
  const user = {
    id: 1,
    username: "dang quang",
    email: "quang@gmail.com",
    phone: "0123456789",
    address: "Ha Noi",
    banner: "src\\images\\user\\banner2.png",
    avatar: "src\\images\\user\\avatar1.jpg",
  };
  return (
    <>
      <AppBarCustomize />
      <Container fixed>
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
              {user && user.banner ? (
                <img
                  src={user.banner}
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
              >
                <BorderColorOutlined sx={{ color: "#fff" }} />
              </Button>
            }
          >
            <img
              src={user.avatar}
              alt="avatar"
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
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
            defaultValue={user.username}
            size="small"
            required
          />
          <Typography variant="body1" gutterBottom>
            Email
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            defaultValue={user.email}
            size="small"
          />
          <Typography variant="body1" gutterBottom>
            Phone
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            defaultValue={user.phone}
            size="small"
          />
          <Typography variant="body1" gutterBottom>
            Address
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            defaultValue={user.address}
            size="small"
          />
        </Box>
        {/* Button UPDATE */}
        <Box sx={{ mt: 2, mb: 2, display: "flex", justifyContent: "flex-end" }}>
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
          >
            SAVE
          </Button>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
