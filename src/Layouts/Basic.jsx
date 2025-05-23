import React, { useEffect } from 'react';
import Footer from '../Components/Footer';

import './Main.scss';
import './Basic.scss';

export default function Basic(props) {

    const { children, pagetitle = "" } = props;

    useEffect(() => {
        document.title = (!!pagetitle ? pagetitle : "Blippi Job Generator");
    }, [pagetitle]);

    return <React.Fragment>

        <div className="basic_content">
            {children}
        </div>

        <Footer includeHome />

    </React.Fragment>

}