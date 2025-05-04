import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import AspectRatio from '@mui/joy/AspectRatio';
import * as Motion from "motion/react-client";

import './Main.scss';

export default function Main(props) {

    const { children, pagetitle = "" } = props;

    useEffect(() => {
        document.title = (!!pagetitle ? pagetitle : "Blippi Job Generator");
    }, [pagetitle]);

    const openShare = () => {
        console.log("open share");
    }

    return <Box className="master_wrapper">

        <AspectRatio sx={{ width: "100%", maxHeight: "100vh" }}>
            <Box className="app_wrapper" style={{
                backgroundImage: "url('/images/blippi-bg.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}><React.Fragment>
                    {children}
                </React.Fragment>
            </Box>
            <Motion.div className="share_button" whileHover={{ scale: 1.2 }} onClick={openShare}>
                <img src="/images/icon-share.png" />
            </Motion.div>
        </AspectRatio>

    </Box >

}