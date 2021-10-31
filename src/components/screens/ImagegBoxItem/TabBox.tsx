import React from 'react'
import {css} from "@emotion/css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';


const __css_tab_box_section = css`

    .tab-menu {
        display: flex;
        justify-content: space-between;
        a { 
            cursor: pointer;
            font-size: 12px;
            margin-right: 5px;
            font-weight: 400;
            outline: none;
            text-decoration: none;
            color: #b3b0b6;
        }
        a.active {
            color: #570093;
            border-bottom: 3px solid #570093;
            padding: 2px;
        }
    }
    .tab-content {
        margin-top: 25px;
        .about {
            padding: 10px 5px;
            .user-info {
                
                .user-details {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .avatar-content-wrapper {
                        display: flex;
                        align-items: center;
                        .user-data {
                            margin: 2px 5px 2px 12px;
                            
                            .title {
                                a {
                                    font-size: 14px;
                                    color: #545454;
                                    font-weight: 500;
                                    cursor: pointer;
                                    text-decoration: none;
                                }
                                .username {
                                    span {
                                        font-size: 12px;
                                        color: #b0b3b6;
                                        background: red;
                                    }
                                    
                                }
                            }
                        }
                    }
                    .actions {
                        display: flex;
                        align-items: center;
                        .follow {
                            font-size: 14px;
                            color: #b0b3b6;
                            font-weight: 500;
                            cursor: pointer;
                        }
                        .more {
                            margin-left: 15px;
                        }
                    }
                    
                }
            }

        }
    }
`;

const TabBox = () => {
    return(
        <React.Fragment>
            <div className={__css_tab_box_section} >
                <div className="tab-menu">
                    <div className="item-left">
                        <a href="#about" className={"active"}>about</a>
                    </div>
                    <div className="item-right">
                        <a href="#stars">2 stars</a> &nbsp;&nbsp;
                        <a href="#comments">0 comments</a>
                    </div>
                </div>
                <div className="tab-content">
                    <div className="about">
                        <div className="user-info">
                            <div className="user-details">
                                <div className="avatar-content-wrapper">
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    <div className="user-data">
                                        <div className="title"> 
                                            <strong><a href="">Rob McLeod</a></strong>
                                        </div>
                                        <div className="username"><span>@nd32</span></div>
                                    </div>
                                </div>
                                <div className="actions">
                                    <div className={"follow"}>Follow</div>
                                    <div className="more"><MoreVertIcon/></div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TabBox