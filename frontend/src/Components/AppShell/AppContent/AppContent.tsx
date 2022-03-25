import { Box, Paper, Typography, Divider } from "@mui/material";
import "./AppContent.scss";
// import Merch from './sections/Merch.tsx';
const AppContent = () => {
  return (
    <Paper elevation={3}>
      <Box>
        <div className="d-flex flex-column justify-content-center w-100 h-100">
          <a
            href="http://twitch.tv/griffinloyal"
            className="text-decoration-none"
          >
            <h5 className="fw-light text-white m-0">— Watch the Stream —</h5>
          </a>
        </div>
        {/* <Merch /> */}
        <Divider />
        <Typography>This is where content goes</Typography>
        <Divider />
        <Typography>This is where content goes</Typography>
        <Divider />
        <Typography>This is where content goes</Typography>
      </Box>
    </Paper>
  );
};

export default AppContent;
