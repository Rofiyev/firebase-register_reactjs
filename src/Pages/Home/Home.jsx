import { Container, Typography } from '@mui/material';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useContext } from 'react';
import { MyContext } from '../../';

const Home = () => {
  const { auth } = useContext(MyContext);
  const [user] = useAuthState(auth);

  return (
    <Container sx={{ display: 'flex', alignItems: 'center', height: '90vh', justifyContent: 'center' }}>
      <Typography variant='h3' fontWeight={'bold'} component={'h3'}>
        Welcome! { }
      </Typography>
    </Container>
  )
}

export default Home;