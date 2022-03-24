import { Box, Paper, Typography, Divider } from '@mui/material';
import Merch from './sections/Merch.tsx';
const AppContent = () => {
  return (
    <Paper elevation={3}>
      <Box>
        <Merch />
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
