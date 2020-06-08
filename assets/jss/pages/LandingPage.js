import colors from "../../colors";

const title = {
	margin: "1.75rem 0 0.875rem",
	textDecoration: "none",
	fontWeight: "700",
	color: colors.text,
	fontFamily: `"Roboto Slab", "Times New Roman", serif`
  };
  

const productStyle = {
	section: {
		textAlign: "center"
	},
	title: {
		...title,
		marginBottom: "1rem",
		marginTop: "30px",
		minHeight: "32px",
		textDecoration: "none"
	},
	description: {
		color: colors.text
	}
};

export default productStyle;
