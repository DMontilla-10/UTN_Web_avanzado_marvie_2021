import * as React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CodeIcon from "@mui/icons-material/Code";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { UseMemo } from "./UseMemo";
import { UseRef } from "./UseRef";

const drawerWidth = 240;

const Home = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <Toolbar />
      <Divider />
      <List>
        {["useState", "useEffect", "useMemo", "useRef"].map((text) => (
          <Link
            to={`/${text}`}
            style={{ textDecoration: "none", color: "#000" }}
          >
            <ListItem button key={text}>
              <ListItemIcon>
                <CodeIcon />
              </ListItemIcon>
              {text}
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {["Datos Personales", "Logout"].map((text, index) => (
          <Link
            to={`/${text}`}
            style={{ textDecoration: "none", color: "#000" }}
          >
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <AccountCircleIcon /> : <LogoutIcon />}
              </ListItemIcon>
              {text}
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <BrowserRouter>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
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
            <Link
              to={'/'}
              style={{ textDecoration: "none", color: "#FFF" }}
            >
              <Typography variant="h6" noWrap component="div">
                Curso Web Avanzado - UTN
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Switch>
            <Route exact path="/">
              Este es el HOME...
            </Route>
            <Route exact path="/useState">
              Explicación de useState...
            </Route>
            <Route exact path="/useEffect">
              Explicación de useEffect...
            </Route>
            <Route exact path="/useMemo">
              <UseMemo />
            </Route>
            <Route exact path="/useRef">
              <UseRef />
            </Route>
            <Route exact path="/Datos Personales">
              Datos personales...
            </Route>
          </Switch>
        </Box>
      </BrowserRouter>
    </Box>
  );
};

Home.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Home;
