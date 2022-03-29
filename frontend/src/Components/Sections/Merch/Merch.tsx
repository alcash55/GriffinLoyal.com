import {
  Grid,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  CardActions,
} from "@mui/material";
import Shirt from "../../../Assets/images/shirt.jpg";
import "./Merch.scss";

const Merch = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className="merch">
      <Grid
        container
        justifyContent="center"
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ p: 10 }}
      >
        <Grid item xs={3} sx={{ mt: 10 }}>
          <Card sx={{ maxWidth: 350 }}>
            <CardMedia component="img" alt="shirt" height="350" image={Shirt} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                T-Shirt Blue
              </Typography>
              <Typography variant="h5" color="text.secondary">
                Comfy Unisex 100% cotton T-shirt
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="outlined" size="small">
                Buy Now
              </Button>
              <Button variant="outlined" size="small">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={3} sx={{ mt: 10 }}>
          <Card sx={{ maxWidth: 350 }}>
            <CardMedia component="img" alt="shirt" height="350" image={Shirt} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                T-Shirt RED
              </Typography>
              <Typography variant="h5" color="text.secondary">
                Comfy Unisex 100% cotton T-shirt
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="outlined" size="small">
                Buy Now
              </Button>
              <Button variant="outlined" size="small">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={6} sx={{ mt: 10 }}>
          <Card sx={{ maxWidth: 350 }}>
            <CardMedia component="img" alt="shirt" height="350" image={Shirt} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                T-Shirt RED
              </Typography>
              <Typography variant="h5" color="text.secondary">
                Comfy Unisex 100% cotton T-shirt
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="outlined" size="small">
                Buy Now
              </Button>
              <Button variant="outlined" size="small">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Merch;
