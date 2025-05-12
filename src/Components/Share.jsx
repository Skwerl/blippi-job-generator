import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import * as Motion from "motion/react-client";
import { FacebookShareButton, FacebookIcon } from "react-share";
import { WhatsappShareButton, WhatsappIcon } from "react-share";
import { EmailShareButton, EmailIcon } from "react-share";
import './Share.scss';

export default function Share(props) {

  const [dialogOpen, setDialogOpen] = useState(false);
  const toggleOpen = () => setDialogOpen(!dialogOpen);

  const shareUrl = "https://d3ckb3j75uaybk.cloudfront.net";

  const handleNativeShare = () => {
    navigator.share({
      title: "Blippi Job Generator",
      text: "What's your perfect job? Find out with Blippi's Job Generator!",
      url: shareUrl,
    });
  };

  return <React.Fragment>

    {dialogOpen && <div className="share_modal">
      <div>

        <IconButton onClick={toggleOpen}>
          <CloseIcon />
        </IconButton>

        <div className="icons">

          <FacebookShareButton url={shareUrl}>
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>

          <WhatsappShareButton url={shareUrl}>
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>

          <EmailShareButton url={shareUrl}>
            <EmailIcon size={32} round={true} />
          </EmailShareButton>

          {(navigator && navigator.canShare) &&
            <IconButton style={{ width: "32px", height: "32px" }} onClick={handleNativeShare}>
              <MoreHorizIcon>More</MoreHorizIcon>
            </IconButton>
          }

        </div>

      </div>
    </div>}

    <Motion.div className="share_button" whileHover={{ scale: 1.2 }} onClick={toggleOpen}>
      <img src="/images/icon-share.png" />
    </Motion.div>

  </React.Fragment >

}