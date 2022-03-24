import { Box, AppBar, Container, Toolbar, Typography, IconButton } from '@mui/material';
import Loyal from './images/Loyal.svg';

const AppBarHeader = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ alignItems: 'center', justifyContent: 'center' }}>
          <Box display="flex" flexDirection="row" sx={{ p: 3 }}>
            <IconButton>Merch</IconButton>
            <IconButton>Twitter</IconButton>
            <img src={Loyal} alt="GB Logo" />
            <IconButton>Test</IconButton>
            <IconButton>Test</IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppBarHeader;
