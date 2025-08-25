import { Typography, Grid, Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Timeline from "./pages/Timeline";
import PrivateRoute from "./components/PrivateRoute";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/Navbar";
import Trending from "./components/Trending";
import React from "react";
import { Box } from '@mui/material';

export default function App() {
  return (
    <Box 
      sx={{ 
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' }, // stacked on mobile, row on bigger screens
        minHeight: '100vh',
        width: '100%',
      }}
    >
      {/* Navbar */}
      <Box 
        sx={{ 
          flex: { xs: '0 0 auto', sm: '0 0 20%' }, 
          borderRight: { sm: '1px solid #ddd' },
          p: 2,
        }}
      >
        <Navbar />
      </Box>

      {/* Timeline */}
      <Box 
        sx={{ 
          flex: { xs: '1 1 auto', sm: '0 0 60%' }, 
          p: 2,
          borderRight: { sm: '1px solid #ddd' }
        }}
      >
        <Container 
          maxWidth={false} // removes default max width constraint
          sx={{ textAlign: "center", mt: 8 }}
        >
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Typography variant="h3" fontWeight="bold">
                    Chirper
                  </Typography>
                  <Typography color="text.secondary">
                    Your timeline will appear here.
                  </Typography>
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/timeline"
              element={
                <PrivateRoute>
                  <Timeline />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile/:username"
              element={
                <PrivateRoute>
                  <ProfilePage />
                </PrivateRoute>
              }
            />
          </Routes>
        </Container>
      </Box>

      {/* Trending */}
      <Box 
        sx={{ 
          flex: { xs: '0 0 auto', sm: '0 0 20%' }, 
          p: 2,
          display: { xs: 'none', sm: 'block' } // hide on mobile
        }}
      >
        <Trending />
      </Box>
    </Box>
  );
}