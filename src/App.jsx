import { Container, Typography } from '@mui/material';

export default function App() {
  return (
    <Container sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h3" fontWeight="bold">Chirper</Typography>
      <Typography color="text.secondary">Your timeline will appear here.</Typography>
    </Container>
  );
}
