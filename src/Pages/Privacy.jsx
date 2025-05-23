import React from 'react';
import { Link } from 'react-router-dom';
import Basic from '../Layouts/Basic';
import { LAUNCH_DATE } from "../Logic";

export default function Privacy() {

  return <Basic>
    <React.Fragment>

      <h1>Privacy Policy</h1>

      <p>Last updated {LAUNCH_DATE}.</p>

      <p><strong>Introduction</strong></p>

      <p>This Privacy Notice is issued on behalf of Moonbug Entertainment Limited, company number 11197631, data protection registration number ZA457059, with its registered office at 3rd Floor, Labs Upper Lock, 3-6 Water Lane, London NW1 8JZ, United Kingdom (<strong>“Moonbug”</strong>, <strong>“us”</strong>, <strong>“we”</strong> or <strong>“our”</strong>). We are responsible for the micro-site site located at <a href="https://www.blippijobgenerator.com">www.BlippiJobGenerator.com</a> (the <strong>“Microsite”</strong>) and this Privacy Notice applies to your use of the Microsite.</p>

      <p>We refer to everyone who accesses or uses the Microsite as a <strong>“User”</strong>. For the purpose of these Terms of Use, <strong>“you”</strong> and <strong>“your”</strong> means you as the User of the Microsite.</p>

      <p>For further information about how we process your personal data when accessing the Microsite please visit our <Link to="/terms">Terms of Use</Link> and <Link to="/cookies">Cookie Policy</Link>.</p>

      <p><strong>What is personal data?</strong></p>

      <p>Personal data is any information about you, for example, your name, our email address, or even your birthday. This also includes data like the internet protocol (IP) address of the device which you use when accessing the Microsite.</p>

      <p><strong>What personal data do we collect from you?</strong></p>

      <p>We do not knowingly collect personal information from users of this Microsite that are aged under 13, except for the browsing information we need to operate the Microsite. We collect this browsing information by using cookies and other similar technologies and the full details as to how we process and use cookies can be found in our <Link to="/cookies">Cookie Policy</Link>.</p>

      <p><strong>Why are we using your personal data?</strong></p>

      <p>We need to collect some of your browsing data so that you can use our Microsite and interact with the Blippi job quiz.</p>

      <p>It is in our legitimate interest to use personal data in this way, to ensure that we can provide access to our Microsite in an effective way, make the content available to you and to make improvements to our Microsite.</p>

      <p>We do not collect any other personal data from this Microsite, nor do we use your browsing data for any other purpose. Any browsing data that we collect while you visit our Microsite is instantly deleted once you leave our Microsite and is never stored anywhere. We however keep anonymised and aggregated data for essential and analytics purposes, for example to count the number of visitors and to see how visitors move around our Microsite when they are using it.</p>

      <p><strong>Links to third-party sites</strong></p>

      <p>This Privacy Notice only applies to personal data processed by us through your use of the Microsite. This Microsite contains links to third-party sites, such as video or music streaming platforms, We have no control over their sites and services and this Privacy Notice does not apply to your interaction with these third parties.</p>

      <p>If you access a third-party site using the links provided on our Microsite, the operators of these sites may collect your personal data from their sites, which could be used by them in accordance with their own privacy policies. Please check these policies before you submit any personal data to those sites.</p>

      <p><strong>What can you ask us about your personal data?</strong></p>

      <p>You can always ask us for a copy of the information we have about you, to change the information we have about you, or to delete the information we have about you.</p>

      <p><strong>Contact us</strong></p>

      <p>If you have any queries regarding this Privacy Notice and/or if you wish to exercise any of your rights as set out above, please contact us using <a href="mailto:privacy@moonbug.com">privacy@moonbug.com</a>.</p>

      <p>Whilst we would prefer that you direct any complaints or queries you have to us first, you may also lodge a complaint to the supervisory authority applicable in your country about the way we process your personal data.  In the UK, this is the Information Commissioner's Office (ICO). The ICO is our designated data controller.</p>

    </React.Fragment>
  </Basic>

}