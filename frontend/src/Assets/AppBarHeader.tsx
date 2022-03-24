import { Box, AppBar, Container, Toolbar, Typography, IconButton } from '@mui/material';
import Loyal from './images/Loyal.svg';

const AppBarHeader = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ alignItems: 'center', justifyContent: 'center' }}>
          <Box display="flex" flexDirection="row" sx={{ p: 3 }}>
            <IconButton sx={{ ml: 3, mr: 3 }}>Merch</IconButton>
            <IconButton sx={{ ml: 3, mr: 3 }}>Sponsors</IconButton>
            <Box sx={{ ml: 5, mr: 5 }}>
              <img src={Loyal} alt="GB Logo" />
            </Box>
            <IconButton sx={{ ml: 3, mr: 3 }}>Watch</IconButton>
            <IconButton sx={{ ml: 3, mr: 3 }}>Schedule</IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppBarHeader;
