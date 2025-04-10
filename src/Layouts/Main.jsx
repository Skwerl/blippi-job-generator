import React, { useEffect } from 'react';

export default function Main(props) {

    const { children, pagetitle = "" } = props;

    useEffect(() => {
        document.title = (!!pagetitle ? pagetitle : "Blippi Prototype");
    }, [pagetitle]);

    return <React.Fragment>
        {children}
    </React.Fragment>

}