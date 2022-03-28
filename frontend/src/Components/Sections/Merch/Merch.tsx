import { Grid, Box, Typography } from "@mui/material";
import "./Merch.scss";

const Merch = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className="merch">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography>Merch</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>Merch</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>Merch</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>TMerch</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Merch;
