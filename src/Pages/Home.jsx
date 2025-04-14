import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import * as Motion from "motion/react-client";
import Main from '../Layouts/Main';

import './Home.scss';

export default function Home() {

  return <Main>
    <React.Fragment>

      <div className="home-container">

        <div className="lockup"><img src="/images/job-show-lockup.png" /></div>
        <div className="text"><img src="/images/text-perfect-job.png" /></div>
        <div className="banner"><img src="/images/text-job-generator.png" /></div>

        <div className="button">
          <Box>
            <Motion.div whileHover={{ scale: 1.2 }}>
              <Link to="/quiz"><img src="/images/button-go.png" /></Link>
            </Motion.div>
          </Box>
        </div>

        <div className="character-blippi-1">
          <Motion.div
            animate={{
              rotate: [0, 2, 0]
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1
            }}>
            <img src="/images/blippi-1.png" />
          </Motion.div>
        </div>

        <div className="character-meekah-1">
          <Motion.div
            animate={{
              rotate: [0, 2, 0]
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1
            }}>
            <img src="/images/meekah-1.png" />
          </Motion.div>
        </div>

        <div className="character-blippi-2 mobile-hide">
          <Motion.div
            animate={{
              rotate: [0, -2, 0]
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1
            }}>
            <img src="/images/blippi-2.png" />
          </Motion.div>
        </div>

        <div className="character-meekah-2 mobile-hide">
          <Motion.div
            animate={{
              rotate: [0, -2, 0]
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1
            }}>
            <img src="/images/meekah-2.png" />
          </Motion.div>
        </div>

      </div>

    </React.Fragment>
  </Main>

}