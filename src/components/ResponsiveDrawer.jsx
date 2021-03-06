import * as React from "react";
import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import { Contacts, Edit, Email, Group, Home, Info, Menu as MenuIcon, ModeNightOutlined, Notifications } from "@mui/icons-material";

// const drawerWidth = 240;

function ResponsiveDrawer({window, myColor, setMyColor, mode, setMode, mobileOpen, setMobileOpen, drawerWidth, handleDrawerToggle}) {
  // const [mobileOpen, setMobileOpen] = React.useState(false);

  // const handleDrawerToggle = () => {
  //   setMobileOpen(!mobileOpen);
  // };

  const drawer = (
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
      <List
        disablePadding
        sx={{ maxWidth: "100%", overflowY: "auto" }}
        dense={true}
      >
        {[
          { text: "Home", icon: <Home /> },
          { text: "Group", icon: <Group /> },
          { text: "Info", icon: <Info /> },
          { text: "Contacts", icon: <Contacts /> },
          { text: "Emails", icon: <Email /> },
          { text: "Notifications", icon: <Notifications /> },
          { text: "Register", icon: <Edit /> },
        ].map((entry, index) => (
          <ListItem disablePadding key={index}>
            <ListItemButton component="a" href="#/">
              <ListItemIcon>{entry.icon}</ListItemIcon>
              <ListItemText>entry.text</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
        <br />
        <ListItem component={Divider} m={0}>
          Theme
        </ListItem>
        <ListItem disablePadding>
          <ButtonGroup
            orientation="vertical"
            variant="contained"
            aria-label="theme"
            size="small"
            direction="row"
            value={myColor}
          >
            <Button onClick={(e) => setMyColor("blue")} bgcolor="blue">
              Blue
            </Button>
            <Button onClick={(e) => setMyColor("purple")} bgcolor="purple">
              Purple
            </Button>
            <Button onClick={(e) => setMyColor("magenta")} bgcolor="magenta">
              Magenta
            </Button>
          </ButtonGroup>
        </ListItem>
        {/* <ListItem>
        <ToggleButtonGroup name="theme" value={ myColor } onChange={e => setMyColor(e.currentTarget.value)} aria-label="theme">
          <ToggleButton name="theme" value="blue" >B</ToggleButton>
          <ToggleButton name="theme" value="purple" >P</ToggleButton>
          <ToggleButton name="theme" value="magenta" >M</ToggleButton>
        </ToggleButtonGroup>
      </ListItem> */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ModeNightOutlined />
            </ListItemIcon>
            <Switch
              onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
            />
          </ListItemButton>
        </ListItem>
        <br />
        <ListItem component={Divider} m={0}>
          Theme
        </ListItem>
        <ListItem disablePadding>
          <ButtonGroup
            orientation="vertical"
            variant="contained"
            aria-label="theme"
            size="small"
            direction="row"
            value={myColor}
          >
            <Button onClick={(e) => setMyColor("blue")} bgcolor="blue">
              Blue
            </Button>
            <Button onClick={(e) => setMyColor("purple")} bgcolor="purple">
              Purple
            </Button>
            <Button  onClick={(e) => setMyColor("magenta")} bgcolor="magenta">
              Magenta
            </Button>
          </ButtonGroup>
        </ListItem>
        {/* <ListItem>
        <ToggleButtonGroup name="theme" value={ myColor } onChange={e => setMyColor(e.currentTarget.value)} aria-label="theme">
          <ToggleButton name="theme" value="blue" >B</ToggleButton>
          <ToggleButton name="theme" value="purple" >P</ToggleButton>
          <ToggleButton name="theme" value="magenta" >M</ToggleButton>
        </ToggleButtonGroup>
      </ListItem> */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ModeNightOutlined />
            </ListItemIcon>
            <Switch
              onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
            />
          </ListItemButton>
        </ListItem>
      </List>
      </Box>
    )

  const container =
    window !== undefined ? () => window().document.body : undefined;
  
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          // width: { sm: `calc(100% - ${drawerWidth}px)` },
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
          <Typography variant="h6" noWrap component="div">
            Omeiza
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        // sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
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
    </Box>
  );
}

// ResponsiveDrawer.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

export default ResponsiveDrawer;
