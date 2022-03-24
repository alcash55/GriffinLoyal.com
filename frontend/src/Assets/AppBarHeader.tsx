import { Box, AppBar, Container, Toolbar, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
// import { TwitterIcon } from '@mui/icons-material';
import Loyal from './images/Loyal.svg';

const AppBarHeader = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#682392' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ alignItems: 'center', justifyContent: 'center' }}>
          <Box display="flex" flexDirection="row" sx={{ p: 3 }}>
            <IconButton sx={{ ml: 3, mr: 3, backgroundColor: '#8D32C3', color: '#E5B13E' }}>
              Merch
            </IconButton>
            <IconButton sx={{ ml: 3, mr: 3, backgroundColor: '#8D32C3', color: '#E5B13E' }}>
              Sponsors
            </IconButton>
            <Box sx={{ display: 'block', ml: 5, mr: 5 }}>
              <img src={Loyal} alt="GB Logo" />
              <Box>
                <IconButton>
                  <TwitterIcon />
                </IconButton>
                <IconButton>
                  <InstagramIcon />
                </IconButton>
                <IconButton>
                  <YouTubeIcon />
                </IconButton>
              </Box>
            </Box>
            <IconButton sx={{ ml: 3, mr: 3, backgroundColor: '#8D32C3', color: '#E5B13E' }}>
              Watch
            </IconButton>
            <IconButton sx={{ ml: 3, mr: 3, backgroundColor: '#8D32C3', color: '#E5B13E' }}>
              Schedule
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppBarHeader;
