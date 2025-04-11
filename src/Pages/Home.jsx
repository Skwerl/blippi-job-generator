import React from 'react';
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
          <Motion.div whileHover={{ scale: 1.2 }}>
            <img src="/images/button-go.png" />
          </Motion.div>
        </div>

      </div>

    </React.Fragment>
  </Main>

}