import SocialMediaButtons from 'react-social-media-buttons';

const SocialButtons = () => {
  return (
    <SocialMediaButtons
      links={[
        'https://www.twitch.tv/griffinloyal',
        'https://twitter.com/griffinloyal',
        'https://www.instagram.com/griffinloyalorgbib/',
        'https://www.tiktok.com/@gbib_?lang=en',
        'https://open.spotify.com/artist/6Y4TcwRvIaudJHYpsdBsR4?si=VbqSARSnQOqMT4k4fCWCMw',
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
  );
};
