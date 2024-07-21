import { AccountCircle } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";

export default function UserAvatar() {
  //   const { isAuthenticated, user } = useAuth0();
  //   const [anchorElUser, setAnchorElUser] = useState(null);
  const isAuthenticated = true;
  return isAuthenticated ? (
    <IconButton
      size="large"
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      // onClick={handleOpenUserMenu}
      color="inherit"
    >
      <AccountCircle />
    </IconButton>
  ) : (
    <Button
      variant="contained"
      color="primary"
      // onClick={() => loginWithRedirect()}
    >
      Log in
    </Button>
  );
}
