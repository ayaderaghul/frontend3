import { Container, Typography } from '@mui/material';
import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Timeline from './pages/Timeline'
import PrivateRoute from './components/PrivateRoute'
import ProfilePage from './pages/ProfilePage'

export default function App() {
  return (
    <Container sx={{ textAlign: 'center', mt: 8 }}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Typography variant="h3" fontWeight="bold">Chirper</Typography>
              <Typography color="text.secondary">Your timeline will appear here.</Typography>
            </>
          }
        />

        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/timeline" element={
          <PrivateRoute>
            <Timeline/>
          </PrivateRoute>
          }/>
        <Route path="/profile/:username" element={
          <PrivateRoute>
            <ProfilePage/>
          </PrivateRoute>
          }/>
      </Routes>
    </Container>
  );
}
