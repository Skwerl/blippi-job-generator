import React, { useEffect, useLayoutEffect } from 'react';
import Box from '@mui/material/Box';
import AspectRatio from '@mui/joy/AspectRatio';
import Share from '../Components/Share';
import Footer from '../Components/Footer';

import './Main.scss';

export default function Main(props) {

    const { children, pagetitle = "" } = props;

    useEffect(() => {
        document.title = (!!pagetitle ? pagetitle : "Blippi Job Generator");
    }, [pagetitle]);

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return <React.Fragment>
        <Box className="master_wrapper">
            <AspectRatio sx={{ width: "100%", maxHeight: "100vh" }}>
                <Box className="app_wrapper" style={{
                    backgroundImage: "url('/images/blippi-bg.jpg')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}><React.Fragment>
                        {children}
                    </React.Fragment>
                </Box>
            </AspectRatio>
            <Footer />
        </Box>
        <Share />
    </React.Fragment>

}