import {css} from "@emotion/css";

export const sliderStyles = {
    root: css`
        .slick-prev{
            background: #333333 !important;
            padding: 10px;
            border-radius: 50%;
            z-index: 1;
            left: 15px;
        }
        
        .slick-next{
            background: #333333 !important;
            padding: 10px;
            border-radius: 50%;
            z-index: 1;
            right: 15px;
        }
    `,
    item: (background: any) => css `
        padding: 10px;
        margin-right: 10px;
        background: red;
        height: 230px;
        background-image: url(${background});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        
        img{
            width: 14px;
           }
    `,
};