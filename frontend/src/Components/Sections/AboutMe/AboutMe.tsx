import { Grid, Box, Typography } from "@mui/material";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className="aboutme">
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

export default AboutMe;
