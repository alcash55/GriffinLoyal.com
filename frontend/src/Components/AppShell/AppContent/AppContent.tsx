import { Box, Paper, Typography } from "@mui/material";
import "./AppContent.scss";
import Merch from "../../Sections/Merch/Merch";
import Watch from "../../Sections/Watch/Watch";
import Schedule from "../../Sections/Schedule/Schedule";
import Sponsors from "../../Sections/Sponsors/Sponsors";
import AboutMe from "../../Sections/AboutMe/AboutMe";

const AppContent = () => {
  return (
    <Paper elevation={3}>
      <Box className="body">
        <Box id="merch" className="merch">
          <Merch />
        </Box>
        <Box id="watch" className="watch">
          <Watch />
        </Box>
        <Box id="scheudle" className="schedule">
          <Schedule />
        </Box>
        <Box id="sponsers" className="sponsors">
          <Sponsors />
        </Box>
        <Box id="aboutme" className="aboutme">
          <AboutMe />
        </Box>
      </Box>
    </Paper>
  );
};

export default AppContent;
