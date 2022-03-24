import { AppBar, Container, Toolbar } from "@mui/material";

const AppBarFooter = () => {
  return (
    <AppBar position="static" sx={{ bottom: 0, backgroundColor: "#682392" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ alignItems: "center", justifyContent: "center" }}
        />
      </Container>
    </AppBar>
  );
};

export default AppBarFooter;
