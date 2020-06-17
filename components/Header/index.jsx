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
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import Router from 'next/router';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Drawer from './Drawer'
import Cookie from "js-cookie"
import styles from "assets/jss/components/Header";
import 'assets/css/header.css'
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import clsx from 'clsx';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import MailIcon from '@material-ui/icons/Mail';

//constUse

const useStyles = makeStyles(theme => styles(theme));

export default function Header(props) {
	const classes = useStyles();
	const { pageName } = props;
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [disconnected, setDisconnected] = React.useState(false);
	const [newllyConnected, setNewllyConnected] = React.useState(false);
	const isMenuOpen = Boolean(anchorEl);
	let renderMenu;


	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleConnectionChange = () => {
		const condition = navigator.onLine ? 'online' : 'offline';
		if (condition === 'online') {
			if (disconnected) {
				setNewllyConnected(true);
				setTimeout(() => {
					setNewllyConnected(false);
				}, 2000);
				setDisconnected(false);
			}
			return;
		}
		return setDisconnected(true);
	}

	React.useEffect(() => {
		window.addEventListener('online', handleConnectionChange);
		window.addEventListener('offline', handleConnectionChange);
	})

	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawer = () => {
		setOpen(!open);
	}

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const onClickHome = () => {
		Router.push('/landing');
	}

	const handleMenuClose = () => {
		setAnchorEl(null);
	};
	const setMenu = (menu) => {
		renderMenu = menu;
	}
	const getLeftButton = () => {
		if (!Cookie.get('token')) {
			return (
				<IconButton
					edge="start"
					className={classes.menuButton}
					color="inherit"
					aria-label="menu"
					onClick={onClickHome}
				>
					<HomeRoundedIcon />
				</IconButton>
			)
		}
		return (
			<IconButton
				edge="start"
				className={classes.menuButton}
				color="inherit"
				aria-label="menu"
				onClick={handleDrawerOpen}
			>
				<MenuIcon />
			</IconButton>
		)
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
				<MenuItem onClick={onClickProfile}>Profile</MenuItem>
				<MenuItem onClick={onClickLogout}>Logout</MenuItem>
			</Menu>)
	}

	const onClickSignin = () => {
		Router.push('/signin');
	}
	const onClickSignup = () => {
		Router.push('/signup');
	}
	const onClickProfile = () => {
		Router.push('/profile');
	}
	const onClickLogout = () => {
		Cookie.remove("token");
		Router.push('/landing')
	}
	setMenu(getMenu())
	return (
		<div className={classes.root}>
			<AppBar className={clsx(classes.appBar, { [classes.appBarShift]: open, })}>
				<Toolbar>
					{!open && getLeftButton()}
					<Typography variant="h6" className={classes.title}>
						{pageName}
					</Typography>
					<IconButton edge="start" className={classes.menuButton} onClick={handleProfileMenuOpen} color="inherit" aria-label="menu">
						<AccountBoxIcon />
					</IconButton>
				</Toolbar>
				{disconnected && <div className='ConnectionError'>Internet connection Lost...</div>}
				{newllyConnected && <div className='ConnectionOk'>Now connected...</div>}
			</AppBar>
			<Drawer
				handleDrawerClose={handleDrawerClose}
				open={open}
			/>
			{renderMenu}
		</div>
	);
}