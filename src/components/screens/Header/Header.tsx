import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {SearchBar} from './SearchBar';
import Tooltip from '@mui/material/Tooltip';
import {headerStyles} from "../../../static/styles/headerStyles";
import ContestIcon from "../../../static/icons/ic_contest.svg";
import DiscoverIcon from "../../../static/icons/ic_discover.svg";
import MoreVertIcon from "../../../static/icons/ic_more_vert.svg";
import UploadPhotoIcon from "../../../static/icons/ic_upload_photo.svg";
import HomeIcon from "../../../static/icons/ic_home.svg";
import NotificationsIcon from "../../../static/icons/ic_notification.svg";
import Logo from "../../../static/images/logo.png";
import {Avatar} from "@mui/material";
import {Link} from "react-router-dom";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonIcon from '@mui/icons-material/Person';
import TextsmsIcon from '@mui/icons-material/Textsms';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

const Header = () => {
    const classes = headerStyles();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <div className={classes.root}>
                <Container>
                    <div className={classes.header}>
                        <Grid container spacing={0}>
                            <Grid className={"logo-grid"} item md={8} lg={2}>
                                <div className={classes.brandLogo}>
                                    <img alt={"Logo"} src={Logo}/>
                                </div>
                            </Grid>
                            <Grid className={"search-grid"} item md={12} lg={4}>
                                <SearchBar/>
                            </Grid>
                            <Grid className={"menu-grid"} item md={12} lg={6}>
                                <div className={classes.menu}>
                                    <div className={"menu-container"}>
                                        <table>
                                            <tr>
                                                <td>
                                                    <Tooltip title="Home" arrow>
                                                        <Link to={"/"}>
                                                            <img alt={"Home"} src={HomeIcon}/>
                                                        </Link>
                                                    </Tooltip>
                                                </td>
                                                <td>
                                                    <Tooltip title="Contest" arrow>
                                                        <Link to={"/"}>
                                                            <img alt={"Contest"} src={ContestIcon}/>
                                                        </Link>
                                                    </Tooltip>
                                                </td>
                                                <td>
                                                    <Tooltip title="Explore" arrow>
                                                        <Link to={"/"}>
                                                            <img alt={"Discover"} src={DiscoverIcon}/>
                                                        </Link>
                                                    </Tooltip>
                                                </td>
                                                <td>
                                                    <Tooltip title="Notification" arrow>
                                                        <Link to={"/"}>
                                                            <img alt={"Notifications"} src={NotificationsIcon}/>
                                                        </Link>
                                                    </Tooltip>
                                                </td>
                                                <td>
                                                    <Tooltip title="Upload Photo" arrow>
                                                        <div className={"upload-photo"}>
                                                            <img alt={"Discover"} src={UploadPhotoIcon}/>
                                                            <span>Upload Photo</span>
                                                        </div>
                                                    </Tooltip>
                                                </td>
                                                <td className={"avatar"}>
                                                    <Tooltip onClick={handleClick} title="Profile & Settings" arrow>
                                                        <Avatar style={{width: 28, height: 28}}>H</Avatar>
                                                    </Tooltip>
                                                    <Menu
                                                        anchorEl={anchorEl}
                                                        open={open}
                                                        onClose={handleClose}
                                                        onClick={handleClose}
                                                        PaperProps={{
                                                            elevation: 0,
                                                            sx: {
                                                                overflow: 'visible',
                                                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                                mt: 1.5,
                                                                '& .MuiAvatar-root': {
                                                                    width: 32,
                                                                    height: 32,
                                                                    ml: -0.5,
                                                                    mr: 1,
                                                                },
                                                                '&:before': {
                                                                    content: '""',
                                                                    display: 'block',
                                                                    position: 'absolute',
                                                                    top: 0,
                                                                    right: 14,
                                                                    width: 10,
                                                                    height: 10,
                                                                    bgcolor: 'background.paper',
                                                                    transform: 'translateY(-50%) rotate(45deg)',
                                                                    zIndex: 0,
                                                                },
                                                            },
                                                        }}
                                                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                                    >
                                                        <MenuItem>
                                                            <ListItemIcon>
                                                                <PersonIcon fontSize="small" />
                                                            </ListItemIcon>
                                                            Profile
                                                        </MenuItem>
                                                        <MenuItem>
                                                            <ListItemIcon>
                                                                <Settings fontSize="small" />
                                                            </ListItemIcon>
                                                            Settings
                                                        </MenuItem>

                                                        <MenuItem>
                                                            <ListItemIcon>
                                                                <TextsmsIcon fontSize="small" />
                                                            </ListItemIcon>
                                                            Feedback
                                                        </MenuItem>
                                                        <MenuItem>
                                                            <ListItemIcon>
                                                                <Logout fontSize="small" />
                                                            </ListItemIcon>
                                                            Logout
                                                        </MenuItem>
                                                    </Menu>
                                                </td>
                                                <td>
                                                    <Link to={"/"} onClick={handleClick}>
                                                        <img alt={"Discover"} src={MoreVertIcon}/>
                                                    </Link>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
            <div style={{marginTop: 50}}/>


        </React.Fragment>
    );
};

export {Header};
