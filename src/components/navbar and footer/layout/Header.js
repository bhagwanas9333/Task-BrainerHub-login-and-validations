import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import { Route, Routes, NavLink as Link } from "react-router-dom";
import FrontendRoutes from "../../navbar and footer/shared/routes/FrontendRoutes";
import { Button } from "@mui/material";

const NavLink = styled(Link)({
  textDecoration: "none",
  margin: "0 5px",
});

const drawerWidth = 240;
const Header = (props) => {
  const { window } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Box>
        <img
          style={{ width: "100px", height: "100px" }}
          src="https://marketplace.canva.com/EAE04Hc76xE/1/0/1600w/canva-green-floral-agriculture-organic-wheat-farm-logo-design-EopC-HgEgK8.jpg"
          alt="logo"
        />
      </Box>
      <Divider />
      <List>
        {FrontendRoutes?.filter(({ showInMenu }) => showInMenu).map(
          ({ path, label }) => (
            <ListItem key={path} disablePadding>
              <NavLink
                end
                to={path}
                style={({ isActive }) => ({
                  width: "100",
                  color: isActive ? "red" : "#000",
                })}
              >
                <ListItemButton sx={{ paddingLeft: 1 }}>
                  <ListItemText primary={label} />
                </ListItemButton>
              </NavLink>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <AppBar component="nav" sx={{ backgroundColor: "#5e39", color: "#fff" }}>
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
          <Box>
            <img
              style={{ width: "60px", height: "60px" }}
              src="https://marketplace.canva.com/EAE04Hc76xE/1/0/1600w/canva-green-floral-agriculture-organic-wheat-farm-logo-design-EopC-HgEgK8.jpg"
              alt="logo"
            />
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" },justifyContent:"flex-end"}}>
            {FrontendRoutes?.filter(({ showInMenu }) => showInMenu).map(
              ({ path, label }) => (
                <Button>
                  <NavLink
                    end
                    key={path}
                    to={path}
                    style={({ isActive }) => ({
                      color: isActive ? "red" : "#fff",
                      fontWeight: "bold",
                    })}
                  >
                    {label}
                  </NavLink>
                </Button>
              )
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
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
      </Box>
      <Box component="main" sx={{ p: 0 }}>
        <Toolbar />
        <Routes>
          {Array.isArray(FrontendRoutes) &&
            FrontendRoutes?.map(({ path, component }, i) => (
              <Route key={path + i} path={path} element={component} />
            ))}
        </Routes>
      </Box>
    </Box>
  );
};

export default Header;
