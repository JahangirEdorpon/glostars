import React from 'react';
import {headerStyles} from "../../../static/styles/headerStyles";
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Button from "@mui/material/Button";

const SearchBar = () => {
    const classes = headerStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className={classes.searchBar}>
            <table>
                <tr>
                    <td>
                        <SearchIcon/>
                    </td>
                    <td>
                        <input placeholder={"Search by people"} onClick={handleOpen}/>
                    </td>
                    <td>
                        <CancelIcon onClick={handleClose}/>
                    </td>
                </tr>
            </table>

            <SearchSuggestionBar open={open}/>
        </div>
    );
};


interface SearchSuggestionBarProps {
    open: boolean,
}
const SearchSuggestionBar: React.FC<SearchSuggestionBarProps> = (props) => {
    const classes = headerStyles();

    return (
        <div className={classes.searchSuggestionBar} style={{display: props.open ? "block" : "none"}}>
            <List dense={true} sx={{ width: '100%' }}>
                <ListItem
                    button
                    secondaryAction={
                        <Button size={"small"} className={'button'}>
                            Follow
                        </Button>
                    }>
                    <ListItemAvatar>
                        <Avatar src={"https://glostars.blob.core.windows.net/profile-pictures/63768332081048_0148f880-3aff-4dfd-b3d7-71b770f93b35"} />
                    </ListItemAvatar>
                    <ListItemText primary="ABC" secondary="Bangladesh" />
                </ListItem>

                <ListItem
                    button
                    secondaryAction={
                        <Button size={"small"} className={'button'}>
                            Follow
                        </Button>
                    }>
                    <ListItemAvatar>
                        <Avatar src={"https://glostars.blob.core.windows.net/profile-pictures/63768332081048_0148f880-3aff-4dfd-b3d7-71b770f93b35"} />
                    </ListItemAvatar>
                    <ListItemText primary="ABC" secondary="Bangladesh" />
                </ListItem>

                <ListItem
                    button
                    secondaryAction={
                        <Button size={"small"} className={'button'}>
                            Follow
                        </Button>
                    }>
                    <ListItemAvatar>
                        <Avatar src={"https://glostars.blob.core.windows.net/profile-pictures/63768332081048_0148f880-3aff-4dfd-b3d7-71b770f93b35"} />
                    </ListItemAvatar>
                    <ListItemText primary="ABC" secondary="Bangladesh" />
                </ListItem>
            </List>
        </div>
    )
};

export {SearchBar};
