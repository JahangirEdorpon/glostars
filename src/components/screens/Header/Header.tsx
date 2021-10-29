import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {SearchBar} from './SearchBar';
import {headerStyles} from "../../../static/styles/headerStyles";
import Logo from "../../../static/images/logo.png";

const Header = () => {
    const classes = headerStyles();

    return (
        <div className={classes.root}>
            <Container>
                <div className={classes.header}>
                    <Grid container spacing={0}>
                        <Grid item lg={2}>
                            <div className={classes.brandLogo}>
                                <img alt={"Logo"} src={Logo} />
                            </div>
                        </Grid>
                        <Grid item lg={4}>
                            <SearchBar />
                        </Grid>
                        <Grid item lg={6}>Menu</Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
};

export {Header};
