import { Button, Box, AppBar } from "@mui/material";

const AppBarHeader = () => {

    return(
        <AppBar position="static">
            <Box sx={{display: "flex", flexDirection: "row"}}>
                <Button variant="outlined">
                    Merch
                </Button>
                <Button>
                    Socials
                </Button>
            </Box>
        </AppBar>
    )
    
}

export default AppBarHeader;