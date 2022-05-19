import { Box, Typography, Divider } from "@mui/material";
import "./Music.scss";

const Music = () => {
  return (
    <Box sx={{}} className="schedule">
      <Typography variant="h4">Music</Typography>
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ p: 1, width: "100%" }}>
          <iframe
            title="GBIB Spotify"
            className="spotify"
            src="https://open.spotify.com/embed/artist/6Y4TcwRvIaudJHYpsdBsR4?utm_source=generator"
            width="50%"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </Box>
        <Box
          sx={{
            p: 1,
            width: "100%",
          }}
        >
          <iframe
            title="GBIB Soundcloud"
            width="50%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/912885256&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
};

export default Music;
