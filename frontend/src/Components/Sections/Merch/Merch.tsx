import {
  Grid,
  Box,
  Typography,
  Card,
  CardMedia,
  Button,
  CardActions,
  CardActionArea,
} from "@mui/material";
import Shirt from "../../../Assets/images/shirt.svg";
import "./Merch.scss";

const Merch = () => {
  return (
    <Box sx={{ flexGrow: 1, height: "100vh" }}>
      <Typography variant="h4">Merch</Typography>
      <Grid container spacing={3} sx={{ p: 5 }}>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100%"
                image={Shirt}
                alt="Shirt SVG"
              />
            </CardActionArea>
            <Typography variant="h6">T-Shirt</Typography>
            <CardActions>
              <Button variant="outlined">Buy Now</Button>
              <Button variant="outlined">More Information</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100%"
                image={Shirt}
                alt="Shirt SVG"
              />
            </CardActionArea>
            <Typography variant="h6">T-Shirt</Typography>
            <CardActions>
              <Button variant="outlined">Buy Now</Button>
              <Button variant="outlined">More Information</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100%"
                image={Shirt}
                alt="Shirt SVG"
              />
            </CardActionArea>
            <Typography variant="h6">T-Shirt</Typography>
            <CardActions>
              <Button variant="outlined">Buy Now</Button>
              <Button variant="outlined">More Information</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100%"
                image={Shirt}
                alt="Shirt SVG"
              />
            </CardActionArea>
            <Typography variant="h6">T-Shirt</Typography>
            <CardActions>
              <Button variant="outlined">Buy Now</Button>
              <Button variant="outlined">More Information</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Merch;
