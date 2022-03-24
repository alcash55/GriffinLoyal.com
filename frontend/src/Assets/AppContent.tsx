import { Box, Paper, Typography, Divider } from '@mui/material';
const AppContent = () => {
  return (
    <Paper elevation={3}>
      <Box>
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
