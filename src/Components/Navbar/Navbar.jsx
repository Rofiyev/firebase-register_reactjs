import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';
import { useAuthState } from 'react-firebase-hooks/auth';
import { MyContext } from '../..';

const settings = ['Profile', 'Dashboard', 'Logout'];
const icons = [<AccountCircleIcon />, <DashboardIcon />, <LogoutIcon />];

function Navbar() {
  const { auth } = React.useContext(MyContext);
  const [user] = useAuthState(auth);

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  const exitRegister = (item) => {
    if (item === 'Logout') auth.signOut();

    handleCloseUserMenu();
  }


  return (
    <AppBar sx={{ bgcolor: '#fff4f1f7', color: '#505050' }} position="static">
      <Container maxWidth="xl">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
          >
            Rof1yev
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            {user ?
              <>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="User" src={user?.photoURL}>R</Avatar>
                </IconButton>
                <Menu
                  sx={{ mt: '45px' }}
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting, i) => (
                    <MenuItem sx={{ '&:hover': { background: 'transparent' } }} key={setting} disableRipple onClick={(_,) => exitRegister(setting)}>
                      <Typography sx={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#505050', ':hover': { color: 'crimson' } }} textAlign="center">{icons[i]} {setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </>
              :
              <Button disableRipple sx={{ textTransform: 'capitalize', color: '#000', bgcolor: '#f7dbd3 !important', '&:active': { bgcolor: '#feebe7 !important', } }}>
                Login
              </Button>
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
}
export default Navbar;