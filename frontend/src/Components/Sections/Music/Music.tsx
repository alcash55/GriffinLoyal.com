import { Grid, Box, Typography } from "@mui/material";
import "./Music.scss";

const Music = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className="schedule">
      <Typography variant="h4">Music</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography>This is where content goes</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>This is where content goes</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>This is where content goes</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>This is where content goes</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Music;
