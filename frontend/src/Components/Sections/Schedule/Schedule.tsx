import { Grid, Box, Typography } from "@mui/material";
import "./Schedule.scss";

const Schedule = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className="schedule">
      <Typography variant="h4">Schedule</Typography>
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

export default Schedule;
