import React from "react";

import { Grid, Box, Paper, List, ListItem, ListItemIcon, ListItemText, Button } from "@mui/material";
import { Home, Search, Notifications, Mail, Person, Logout } from "@mui/icons-material";
import {
  Typography,
  ListItemButton
} from "@mui/material";


export default function Navbar() {
  

  return (
    <div>
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
          Trending
        </Typography>
        {[...Array(5)].map((_, i) => (
          <Paper key={i} sx={{ p: 2, mb: 2 }}>
            <Typography variant="subtitle1">#Topic {i + 1}</Typography>
            <Typography variant="body2" color="text.secondary">
              20K Tweets
            </Typography>
          </Paper>
        ))}
        </div>
);
}

