import { Box, AppBar, Container, Toolbar, Typography, IconButton } from '@mui/material';
import Loyal from './images/Loyal.svg';
import SocialMediaButtons from 'react-social-media-buttons';

const AppBarHeader = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ alignItems: 'left' }}>
        <Toolbar disableGutters>
          <Box
            alignItems="center"
            justifyContent="center"
            sx={{ display: 'flex', flexDirection: 'row' }}
          >
            <img src={Loyal} alt="GB Logo" />
          </Box>
        </Toolbar>
      </Container>
      <Container maxWidth="xl" sx={{ alignItems: 'right' }}>
        <Toolbar disableGutters>
          <Box
            alignItems="center"
            justifyContent="center"
            sx={{ display: 'flex', flexDirection: 'row' }}
          >
            <SocialMediaButtons
              links={[
                'https://www.twitch.tv/griffinloyal',
                'https://twitter.com/griffinloyal',
                'https://www.instagram.com/griffinloyalorgbib/',
                'https://www.tiktok.com/@gbib_?lang=en',
                'https://www.snapchat.com/add/loyalgb?share_id=NzVFNUNF&locale=en_US',
              ]}
              buttonStyle={{
                width: '64px',
                height: '64px',
                margin: '0px 0px',
                backgroundColor: 'transparent',
              }}
              iconStyle={{ color: '#000000' }}
              openNewTab={true}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppBarHeader;
