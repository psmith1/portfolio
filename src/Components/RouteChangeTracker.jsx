import React from 'react'
import { withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
const RouteChangeTracker = ({ history }) => {

const trackingId = "G-WK39HEGN9M";
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);

    history.listen((location, action) => {
        ReactGA.set({ page: location.pathname });
        ReactGA.pageview(location.pathname);
        console.log(location);
    });

    return <div></div>;
};

export default withRouter(RouteChangeTracker);
