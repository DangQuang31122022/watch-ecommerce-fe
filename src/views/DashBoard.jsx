import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems } from "../components/admin/ListItems";
import Chart from "../components/admin/Chart";
import Deposits from "../components/admin/Deposits";
import Orders from "../components/admin/Orders";
import { DataGrid } from "@mui/x-data-grid";
import { ProductAPI } from "../api/ProductAPI";
import { Button, Stack } from "@mui/material";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchProducts = async () => {
      const data = await ProductAPI.allProducts();
      if (data && data.data) {
        setProducts(data.data);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    // <ThemeProvider theme={defaultTheme}>
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">{mainListItems}</List>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          {loading ? <div>Loading...</div> : <ProductUI products={products} />}
          <Copyright sx={{ pt: 4 }} />
        </Container>
      </Box>
    </Box>
    // </ThemeProvider>
  );
}

function ProductUI({ products }) {
  const [row, setRow] = React.useState(
    products.map((product) => {
      return {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: product.quantity,
        brand: product.brand,
        description: product.description,
        battery: product.battery,
        screen: product.screen,
        color: product.color,
        status: product.status,
      };
    })
  );
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Product Name",
      width: 150,
      editable: true,
    },
    {
      field: "price",
      headerName: "Price",
      width: 110,
      editable: true,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 110,
      editable: true,
    },
    {
      field: "brand",
      headerName: "Brand",
      width: 110,
      editable: true,
    },
    {
      field: "description",
      headerName: "Description",
      width: 110,
      editable: true,
    },
    {
      field: "battery",
      headerName: "Battery",
      width: 110,
      editable: true,
    },
    {
      field: "screen",
      headerName: "Screen",
      width: 110,
      editable: true,
    },
    {
      field: "color",
      headerName: "Color",
      width: 110,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 110,
      editable: true,
    },
  ];
  const rows = products.map((product) => {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      brand: product.brand,
      description: product.description,
      battery: product.battery,
      screen: product.screen,
      color: product.color,
      status: product.status,
    };
  });
  // const removeRow = () => setNbRows((x) => Math.max(0, x - 1));
  const addRow = (newRow) => setRow((prevRows) => [...prevRows, newRow]);
  const handleAddRow = () => {
    const newRow = {
      id: rows.length + 1,
      name: "Product Name",
      price: 0,
      quantity: 0,
      brand: "Brand",
      description: "Description",
      battery: "Battery",
      screen: "Screen",
      color: "Color",
      status: "Status",
    };
    addRow(newRow);
  };

  return (
    <>
      <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
        <Button size="small">Remove a row</Button>
        <Button size="small" onClick={handleAddRow}>
          Add a row
        </Button>
      </Stack>
      <Box
        style={{
          height: 400,
        }}
      >
        <DataGrid
          rows={row}
          columns={columns}
          pageSize={5}
          checkboxSelection
          rowsPerPageOptions={[5]}
          pagination
          paginationMode="client"
        />
      </Box>
    </>
  );
}
