import React from 'react';
import {css} from '@emotion/css';
import ExpandIcon from "../../../static/icons/ic_expand.svg";

const __css_img_box_section = css`
    .img-wrapper {
        position: relative !important;
        img {
            width: 100%;
        }
    }
    
    .expand {
        
        position: absolute;
        top: 0;
        right: 0;
        background-color: rgba(0,0,0, 0.2);
        margin: 10px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 20px;
            height: 20px;    
            min-height: auto;    
            padding: 2px;
        }
    }
`;

const ImageBox = ({src}: {src:string}) => {
    return(
        <React.Fragment>
            <div className={__css_img_box_section}>
                <div className="img-wrapper">
                    <img src={src} alt="imgBox" />
                    <div className={"expand"}><img src={ExpandIcon} alt=""/></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ImageBox