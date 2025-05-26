import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import * as Motion from "motion/react-client";
import { Howl } from 'howler';

import './Player.scss';

export default function Player(props) {

  const { snippet } = props;
  // const [embedDisplay, setEmbedDisplay] = useState(false);
  const [replayEnable, setReplayEnable] = useState(false);

  const AudioPlayer = new Howl({
    src: [`/audio/${snippet}.mp3`, `/audio/${snippet}.wav`],
    html5: true,
    volume: 1,
    onend: function () {
      setReplayEnable(true);
    }
  });

  const playSnippet = () => {
    if (!AudioPlayer.playing()) {
      AudioPlayer.play();
      // setTimeout(() => {
      //   setEmbedDisplay(true);
      // }, 10000);
    }
  }

  const handleReplay = () => {
    if (!AudioPlayer.playing()) {
      AudioPlayer.play();
    }
  }

  const handleLinkfire = () => {
    window.open("https://Moonbug.lnk.to/FqzpsmJG", "_blank");
  }

  const handleExplore = () => {
    window.open("https://blippi.com", "_blank");
  }

  return <React.Fragment>

    {replayEnable && <div className="ctas-wrapper">
      <div className="button">
        <img src="/images/button-replay.png" onClick={handleReplay} />
      </div>
      <div className="button">
        <img src="/images/button-linkfire.png" onClick={handleLinkfire} />
      </div>
      <div className="button">
        <Link to="/">
          <img src="/images/button-reset.png" />
        </Link>
      </div>
      <div className="button">
        <img src="/images/button-explore.png" onClick={handleExplore} />
      </div>
    </div>}

    {/* {embedDisplay && <div className="modal-embed">
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
    </div>} */}

    {!replayEnable && <div className="button">
      <Box>
        <Motion.div whileHover={{ scale: 1.2 }}>
          <img src="/images/button-play.png" onClick={playSnippet} />
        </Motion.div>
      </Box>
    </div>}

  </React.Fragment >

}