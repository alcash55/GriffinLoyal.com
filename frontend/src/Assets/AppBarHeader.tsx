import { Box, AppBar, Container, Toolbar, Typography, IconButton } from '@mui/material';
import Loyal from './images/Loyal.svg';

const AppBarHeader = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ alignItems: 'center' }}>
        <Toolbar disableGutters>
          <Box
            alignItems="center"
            justifyContent="center"
            sx={{ display: 'flex', flexDirection: 'row' }}
          >
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
