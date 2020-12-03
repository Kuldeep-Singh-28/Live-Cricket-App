import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";

const NavBar = () => {
    return (
        <AppBar position="static" >
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h5">Live Cricket</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;