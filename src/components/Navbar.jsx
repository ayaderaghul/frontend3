import React from "react";
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import {
  Home,
  Search,
  Notifications,
  Mail,
  Person,
  Logout,
} from "@mui/icons-material";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", icon: <Home />, to: "/timeline" },
    { label: "Explore", icon: <Search />, to: "/explore" },
    { label: "Notifications", icon: <Notifications />, to: "/notifications" },
    { label: "Messages", icon: <Mail />, to: "/messages" },
    { label: "Profile", icon: <Person />, to: "/profile" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography
        variant="h5"
        sx={{ color: "primary.main", mb: 4, fontWeight: 700, cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        Twitter Clone
      </Typography>

      <List sx={{ mb: 2 }}>
        {navItems.map((item) => (
          <ListItemButton
            key={item.label}
            component={NavLink}
            to={item.to}
            sx={{
              borderRadius: 5,
              mb: 0.5,
              "&.active": { bgcolor: "action.selected" },
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>

      <Button
        fullWidth
        variant="outlined"
        color="error"
        startIcon={<Logout />}
        onClick={handleLogout}
        sx={{ borderRadius: 5 }}
      >
        Logout
      </Button>
    </Box>
  );
}
