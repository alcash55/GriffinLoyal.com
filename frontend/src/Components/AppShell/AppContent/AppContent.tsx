import { Box, Paper, Typography } from "@mui/material";
import "./AppContent.scss";
// import Merch from './sections/Merch.tsx';
const AppContent = () => {
  return (
    <Paper elevation={3}>
      <Box className="body">
        <Box id="merch" className="merch">
          <Typography> this is where content goes</Typography>
        </Box>
        <Box id="watch" className="watch">
          <Typography> this is where content goes</Typography>
        </Box>
        <Box id="scheudle" className="schedule">
          <Typography> this is where content goes</Typography>
        </Box>
        <Box id="sponsers" className="sponsors">
          <Typography> this is where content goes</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default AppContent;
