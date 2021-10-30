import React from 'react';
import {Header} from "../components/screens/Header";
import Slider from "../components/screens/Slider/Slider";
import ExploreImages from "../components/screens/Explore/ExploreImages";

const Explore = () => {
    return (
        <React.Fragment>
            <Header/>
            <Slider/>
            <ExploreImages/>
        </React.Fragment>
    );
};

export default Explore;
