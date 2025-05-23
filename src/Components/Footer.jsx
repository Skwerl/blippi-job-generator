import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

export default function Footer(props) {

  const { includeHome = false } = props;

  return <React.Fragment>

    <div className="footer_panel">
      {includeHome && <span><Link to="/">Home</Link></span>}
      <span><Link to="/terms">Terms</Link></span>
      <span><Link to="/privacy">Privacy</Link></span>
      <span><Link to="/cookies">Cookie Policy</Link></span>
    </div>

  </React.Fragment >

}