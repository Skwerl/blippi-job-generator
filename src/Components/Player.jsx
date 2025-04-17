import React from 'react';
import Box from '@mui/material/Box';
import * as Motion from "motion/react-client";
import { Howl } from 'howler';

export default function Player(props) {

  const { snippet } = props;

  const AudioPlayer = new Howl({
    src: [snippet],
    html5: true,
    volume: 1,
    onend: function () {
      console.log('Finished!');
    }
  });

  const playSnippet = () => {
    AudioPlayer.play();
  }

  return <React.Fragment>

    <div className="button">
      <Box>
        <Motion.div whileHover={{ scale: 1.2 }}>
          <img src="/images/button-play.png" onClick={playSnippet} />
        </Motion.div>
      </Box>
    </div>

  </React.Fragment >

}