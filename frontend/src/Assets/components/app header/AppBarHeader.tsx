import { Box, AppBar, Container, Toolbar, IconButton, SvgIcon, Button } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
// import { TwitterIcon, InstagramIcon, YouTubeIcon } from '@mui/material';
import Loyal from './images/Loyal.svg';

const AppBarHeader = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#682392', p: 2 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ alignItems: 'center', justifyContent: 'center' }}>
          <Box display="contents" flexDirection="row" sx={{ p: 3 }}>
            <Button
              sx={{
                ml: 3,
                mr: 3,
                backgroundColor: '#8D32C3',
                color: '#E5B13E',
                minWidth: '5em',
                maxHeight: '3em',
              }}
            >
              Schedule
            </Button>
            <Button
              sx={{
                ml: 3,
                mr: 3,
                backgroundColor: '#8D32C3',
                color: '#E5B13E',
                minWidth: '5em',
                maxHeight: '3em',
              }}
            >
              Watch
            </Button>
            <Box sx={{ display: 'block', ml: 5, mr: 5 }}>
              <img src={Loyal} alt="GB Logo" />
              <Box>
                <IconButton>
                  <SvgIcon>
                    <TwitterIcon />
                  </SvgIcon>
                </IconButton>

                <IconButton>
                  <SvgIcon>
                    <InstagramIcon />
                  </SvgIcon>
                </IconButton>

                <IconButton>
                  <SvgIcon>
                    <YouTubeIcon />
                  </SvgIcon>
                </IconButton>
              </Box>
            </Box>
            <Button
              sx={{
                ml: 3,
                mr: 3,
                backgroundColor: '#8D32C3',
                color: '#E5B13E',
                minWidth: '5em',
                maxHeight: '3em',
              }}
            >
              Merch
            </Button>
            <Button
              sx={{
                ml: 3,
                mr: 3,
                backgroundColor: '#8D32C3',
                color: '#E5B13E',
                minWidth: '5em',
                maxHeight: '3em',
              }}
            >
              Sponsors
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppBarHeader;
