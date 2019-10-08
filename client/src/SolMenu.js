import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import IconButton from '@material-ui/core/IconButton/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

export default function SolMenu(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}>
            <List>
                <ListItem button onClick={() => props.history.push('/')}>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                    <ListItemText primary="Ana Sayfa"/>
                </ListItem>
                <Divider />
                <ListItem button onClick={() => props.history.push('/s1')}>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                    <ListItemText primary="Sayfa-1"/>
                </ListItem>
                <Divider />
                <ListItem button onClick={() => props.history.push('/s2')}>
                    <ListItemIcon><InboxIcon /></ListItemIcon>
                    <ListItemText primary="Sayfa-2"/>
                </ListItem>
                <Divider />
            </List>



        </div>
    );

    return (
        <div>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                        onClick={toggleDrawer('left', true)}>
                <MenuIcon />
            </IconButton>
            <SwipeableDrawer
                open={state.left}
                onClose={toggleDrawer('left', false)}
                onOpen={toggleDrawer('left', true)}
            >
                {sideList('left')}
            </SwipeableDrawer>
        </div>
    );
}

