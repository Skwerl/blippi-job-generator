import React, { useState } from 'react';
import Box from '@mui/material/Box';
import * as Motion from "motion/react-client";
import { Howl } from 'howler';

import './Player.scss';

export default function Player(props) {

  const { snippet } = props;
  const [embedDisplay, setEmbedDisplay] = useState(false);
  const [replayEnable, setReplayEnable] = useState(false);

  const AudioPlayer = new Howl({
    src: [snippet],
    html5: true,
    volume: 1,
    onend: function () {
      setReplayEnable(true);
    }
  });

  const playSnippet = () => {
    if (!AudioPlayer.playing()) {
      AudioPlayer.play();
      setTimeout(() => {
        setEmbedDisplay(true);
      }, 10000);
    }
  }

  const handleReplay = () => {
    AudioPlayer.play();
  }

  return <React.Fragment>

    {embedDisplay && <div className="modal-embed">
      <div className="iframe-wrapper">
        <iframe
          src="https://blippi.lnk.to/WeExploreJG/widget"
          frameBorder="0"
          allowtransparency="true"
        ></iframe>
        {replayEnable && <div className="button">
          <img src="/images/button-replay.png" onClick={handleReplay} />
        </div>}
      </div>
    </div>}

    <div className="button">
      <Box>
        <Motion.div whileHover={{ scale: 1.2 }}>
          <img src="/images/button-play.png" onClick={playSnippet} />
        </Motion.div>
      </Box>
    </div>

  </React.Fragment >

}