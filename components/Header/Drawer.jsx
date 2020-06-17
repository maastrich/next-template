import React from 'react';
import {
	Drawer,
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	IconButton,
	ClickAwayListener
} from '@material-ui/core'
import styles from 'assets/jss/components/Header/Drawer'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Router from 'next/router';
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';
import DashboardIcon from '@material-ui/icons/Dashboard';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles(theme => styles(theme));

export default function DrawerProvider(props) {
	const classes = useStyles();
	const theme = useTheme();
	const { open, handleDrawerClose } = props;

	return (
		open &&
		<ClickAwayListener
			onClickAway={handleDrawerClose}
		>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton color="inherit" onClick={handleDrawerClose}>
						<MenuOpenRoundedIcon />
					</IconButton>
				</div>
				<Divider />
				<List>
					{[
						{
							name: 'Dashboard',
							onClick: () => { Router.push('/dashboard') },
							icon: <DashboardIcon />
						},
						{
							name: 'Profile',
							onClick: () => { Router.push('/profile') },
							icon: <AccountBoxIcon />
						},
					].map((item, index) => (
						<ListItem button key={index} onClick={item.onClick}>
							<ListItemIcon className={classes.icons}>{item.icon}</ListItemIcon>
							<ListItemText primary={item.name} />
						</ListItem>
					))}
				</List>
				<Divider />
				<List>
					{['All mail', 'Trash', 'Spam'].map((text, index) => (
						<ListItem button key={text}>
							<ListItemIcon className={classes.icons}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
			</Drawer>
		</ClickAwayListener>
	)
}