import { Box, Typography } from "@mui/material";
import "./Watch.scss";

const Watch = () => {
  return (
    <Box className="watch">
      <Typography variant="h4">Watch</Typography>
      <Box
        sx={{ display: "flex", justifyContent: "space-around", mr: 35, pt: 15 }}
      >
        {/* https://dev.twitch.tv/docs/embed/video-and-clips/ */}
        {/* Possibly doesnt work with local host */}
        <iframe
          className="embedStream"
          title="Griffin Loyal's Twitch"
          src="https://player.twitch.tv/?channel=GriffinLoyal&parent=localhost:3000&autoplay=true&muted=true"
          frameBorder="0"
          allowFullScreen={true}
          scrolling="no"
          height="720"
          width="1280"
        ></iframe>
      </Box>
    </Box>
  );
};

export default Watch;
