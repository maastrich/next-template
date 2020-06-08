import Colors from 'assets/colors'

const title = {
	margin: "1.75rem 0 0.875rem",
	textDecoration: "none",
	fontWeight: "700",
	fontFamily: `"Roboto Slab", "Times New Roman", serif`
};


const infoStyle = {
	infoArea: {
		maxWidth: "360px",
		margin: "0 auto",
		padding: "0px"
	},
	iconWrapper: {
		float: "left",
		marginTop: "24px",
		marginRight: "10px"
	},
	primary: {
		color: Colors.primary
	},
	warning: {
		color: Colors.warning
	},
	danger: {
		color: Colors.danger
	},
	success: {
		color: Colors.success
	},
	info: {
		color: Colors.info
	},
	rose: {
		color: Colors.rose
	},
	gray: {
		color: Colors.gray
	},
	icon: {
		width: "36px",
		height: "36px"
	},
	descriptionWrapper: {
		color: Colors.text,
		overflow: "hidden"
	},
	title,
	description: {
		color: Colors.text,
		overflow: "hidden",
		marginTop: "0px",
		fontSize: "14px"
	},
	iconWrapperVertical: {
		float: "none"
	},
	iconVertical: {
		width: "61px",
		height: "61px"
	}
};

export default infoStyle;
