import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Router from 'next/router';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Cookie from "js-cookie"
import styles from "assets/jss/components/Header";

//constUse

const useStyles = makeStyles(theme => styles(theme));

export default function Header(props) {
    const classes = useStyles();
    const { pageName } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    let renderMenu;


    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const setMenu = (menu) => {
        renderMenu = menu;
    }

    const getMenu = () => {
        if (!Cookie.get("token")) {
            return (<Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMenuOpen}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={onClickSignin}>Signin</MenuItem>
                <MenuItem onClick={onClickSignup}>Signup</MenuItem>
            </Menu>)
        }
        return (
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMenuOpen}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={onClickLogout}>Logout</MenuItem>
            </Menu>)
    }

    const onClickSignin = () => {
        Router.push('/signin');
    }
    const onClickSignup = () => {
        Router.push('/signup');
    }

    const onClickLogout = () => {
        Cookie.remove("token");
        Router.push('/landing')
    }
    setMenu(getMenu())
    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {pageName}
                    </Typography>
                    <IconButton edge="start" className={classes.menuButton} onClick={handleProfileMenuOpen} color="inherit" aria-label="menu">
                        <AccountBoxIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </div>
    );
}