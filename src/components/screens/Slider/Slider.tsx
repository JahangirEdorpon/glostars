import React from 'react';
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {sliderStyles} from "../../../static/styles/sliderStyles";
import {Container} from "@mui/material";
import bg1 from "../../../static/images/image.jpeg";
import bg2 from "../../../static/images/back2.jpeg";
import bg3 from "../../../static/images/back3.jpeg";
import bg4 from "../../../static/images/back4.jpeg";
import bg5 from "../../../static/images/back5.jpeg";
import ContestIcon from "../../../static/icons/ic_contest.svg";

function SampleNextArrow(props:any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props:any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}

const Slider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className={sliderStyles.root}>
            <Container>
                <SlickSlider {...settings} arrows={true}>
                    <div>
                        <div className={sliderStyles.item(bg1)}><img alt={"Contest"} src={ContestIcon}/></div>
                    </div>
                    <div>
                        <div className={sliderStyles.item(bg2)}><img alt={"Contest"} src={ContestIcon}/></div>
                    </div>
                    <div>
                        <div className={sliderStyles.item(bg3)}><img alt={"Contest"} src={ContestIcon}/></div>
                    </div>
                    <div>
                        <div className={sliderStyles.item(bg4)}><img alt={"Contest"} src={ContestIcon}/></div>
                    </div>
                    <div>
                        <div className={sliderStyles.item(bg5)}><img alt={"Contest"} src={ContestIcon}/></div>
                    </div>
                    <div>
                        <div className={sliderStyles.item(bg1)}><img alt={"Contest"} src={ContestIcon}/></div>
                    </div>
                </SlickSlider>
            </Container>

        </div>
    );
};

export default Slider;
