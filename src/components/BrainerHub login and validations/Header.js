import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { useState } from "react";
import Home from "./Home";
import About from "./About";
import CountContext from "./CountContext";
import { Badge } from "@mui/material";
import { styled } from "@mui/material/styles";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import { selectCart } from "./app/slice/cartSlice";
import { green } from "@mui/material/colors";

const drawerWidth = 240;
const navItems = ["Home", "Login", "About", "Contact"];

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Link = ({ color, ActiveColor, children, ...props }) => (
  <NavLink
    {...props}
    style={({ isActive }) => ({
      textDecoration: "none",
      color: isActive ? ActiveColor : color,
      backgroundColor: isActive ? color : ActiveColor,
    })}
  >
    {children}
  </NavLink>
);

const Header = (props, { setLogged }) => {
  const [orders, setOrders] = useState([]);
  const cart = useSelector(selectCart);
  console.log(cart);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  React.useEffect(() => {
    const order =
      cart && cart.reduce((total, item) => total + item.quantity, 0);

    if (order) setOrders(order);
    console.log("totalQuantity:", order);
  }, [cart]);
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          {/* <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
              <Link to={linkPath}>  {item}</Link>
              </Button>
            ))}
          </Box> */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link to="/" setActiveColor="#666" color="#000">
              <Button sx={{ color: "#fff" }}>Home</Button>
            </Link>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link to="/menus" setActiveColor="#666" color="#000">
              <Button sx={{ color: "#fff" }}>Menus</Button>
            </Link>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link to="/login" setActiveColor="#666" color="#000">
              <Button sx={{ color: "#fff" }}>Login</Button>
            </Link>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link to="/about" activeColor="#666" color="#000">
              <Button sx={{ color: "#fff" }}>About</Button>
            </Link>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link to="/cart" setLogged={(setLogged = true)}>
              <Button sx={{ color: "#fff" }}>
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={orders.length} color="secondary">
                    <ShoppingCartIcon />
                  </StyledBadge>
                </IconButton>
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
};

export default Header;
