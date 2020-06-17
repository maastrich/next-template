import Colors from 'assets/colors';
const drawerWidth = 240;

const DrawerStyles = (theme) => {
	return {
		root: {
			display: 'flex',
		},
		drawer: {
			flexShrink: 0,
			color: Colors.text,
			width: drawerWidth
		},
		drawerPaper: {
			width: drawerWidth,
			color: Colors.text,
			backgroundColor: Colors.primary
		},
		drawerHeader: {
			display: 'flex',
			alignItems: 'center',
			color: Colors.text,
			padding: theme.spacing(0, 1),
			// necessary for content to be below app bar
			...theme.mixins.toolbar,
		},
		content: {
			flexGrow: 1,
			padding: theme.spacing(3),
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			marginLeft: -drawerWidth,
		},
		contentShift: {
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		},
		icons: {
			color: Colors.text
		}
	}
}

export default DrawerStyles;