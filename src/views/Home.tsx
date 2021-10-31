import React from 'react';
import {Header} from "../components/screens/Header";
import PostCard from '../components/screens/ImagegBoxItem/PostCard';
import Slider from "../components/screens/Slider/Slider";


const Home = () => {
    return (
        <div>
            <Header />
            <Slider />
            <PostCard/>
        </div>
    );
};

export default Home;
