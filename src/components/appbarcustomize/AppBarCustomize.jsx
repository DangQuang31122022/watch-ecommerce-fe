import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ShutterSpeedIcon from "@mui/icons-material/ShutterSpeed";
import Basket from "../basket/Basket";
import { Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserAPI } from "../../api/UserAPI";
import { setMe } from "../../redux/userSlice";
import AuthAPI from "../../api/AuthAPI";
function AppBarCustomize() {
  const pages = ["Products", "Recommand", "Feature"];
  let settings = ["Account", "Sign out"];
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const isSignInSuccess = React.useRef(false);
  const checkSignIn = () => {
    let token = localStorage.getItem("token");
    if (token) {
      isSignInSuccess.current = true;
    }
  };
  checkSignIn();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    isSignInSuccess.current = false;
    dispatch(setMe(null));
    navigate("/");
  };
  React.useEffect(() => {
    const getUser = async () => {
      const data = await UserAPI.getMe();
      console.log("data", data);

      if (data && data.code === 1000) {
        dispatch(setMe(data.data));
      }
    };
    if (isSignInSuccess.current && !user) {
      //
      getUser();
    }
  }, [user]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (setting) => {
    setAnchorElUser(null);
    if (setting === "Sign out") {
      handleSignOut();
    } else if (setting === "Account") {
      navigate("/account");
    }
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Icon + logo (not responsive) */}
          <ShutterSpeedIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SMART WATCH
          </Typography>

          {/* Menu navbar: include pages (responsive) */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* Icon + logo center (responsive) */}
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SMART WATCH
          </Typography>

          {/* Pages not responsive */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Shopping cart */}
          <Box sx={{ flexGrow: 0, marginRight: 2 }}>
            {/* <Tooltip title="Shopping cart"> */}
            <Tooltip>
              <Badge badgeContent={cart.length} color="secondary">
                <Basket />
              </Badge>
            </Tooltip>
          </Box>

          {/* User settings (user menu)*/}
          <Box sx={{ flexGrow: 0 }}>
            {isSignInSuccess.current ? (
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {user && user.url_avatar ? (
                    <Avatar alt="user" src={user.url_avatar} />
                  ) : (
                    <Avatar alt="user" src="/static/images/avatar/2.jpg" />
                  )}
                </IconButton>
              </Tooltip>
            ) : (
              <Box sx={{ display: "flex", gap: 1 }}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Sign in
                </Button>
                <Button variant="contained" color="secondary">
                  Sign up
                </Button>
              </Box>
            )}

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => {
                    handleCloseUserMenu(setting);
                  }}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default AppBarCustomize;
