import { Grid, Box, Typography } from "@mui/material";
import "./Sponsors.scss";

const Sponsors = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className="sponsors">
      <Typography variant="h4">Sponsors</Typography>
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

export default Sponsors;
