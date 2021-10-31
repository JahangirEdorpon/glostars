
import React from 'react';



const ImageBox = (props: any) => {
    return(
        <React.Fragment>
            <div className="__css_img_box_section">
                <img src={props.src} alt="imgBox" />
                <span>Hello</span>
            </div>
        </React.Fragment>
    )
}

export default ImageBox