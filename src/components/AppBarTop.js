import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { CgMenuRound } from 'react-icons/cg';
import { IoSearchCircleOutline, IoFilterCircleOutline } from 'react-icons/io5';
import Divider from '@mui/material/Divider';
import ScrollTabs from './ScrollTabs';

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default function AppBarTop(props) {
    return (
        <>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar style={{ backgroundColor: "#fff" }}>
                    <Toolbar>
                        <CgMenuRound style={{ color: "#000" }} size="22" />
                        <Typography align="center" style={{ color: "#000" }} justifyContent="center" flex={1} variant="body1" component="div">
                            MEMBERS DIRECTORY
                        </Typography >
                        <IoFilterCircleOutline color="#000" size="22" style={{ marginRight: "0.5rem" }} />
                        <IoSearchCircleOutline style={{ color: "#000" }} size="24" />

                    </Toolbar>
                    <Divider variant="fullWidth" style={{ backgroundColor: "black" }} />
                </AppBar>
            </ElevationScroll>
            <Toolbar />
            <>
                <ScrollTabs />
            </>
        </>
    );
}
