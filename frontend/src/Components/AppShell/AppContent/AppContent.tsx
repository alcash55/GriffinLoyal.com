import { Box, Paper, Typography, Divider } from "@mui/material";
import "./AppContent.scss";
// import Merch from './sections/Merch.tsx';
const AppContent = () => {
  return (
    <Paper elevation={3}>
      <Box className="body">
        <Box className="merch">
          <Typography> this is where content goes</Typography>
        </Box>
        <Box className="watch">
          <Typography> this is where content goes</Typography>
        </Box>
        <Box className="schedule">
          <Typography> this is where content goes</Typography>
        </Box>
        <Box className="sponsors">
          <Typography> this is where content goes</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default AppContent;
