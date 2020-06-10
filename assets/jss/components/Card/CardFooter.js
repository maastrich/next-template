import Colors from 'assets/colors'

const cardFooter = {
  display: "flex",
  alignItems: "center",
  padding: "0.9375rem 1.875rem",
};

const cardFooterStyle = {
    default: {
      ...cardFooter
    },
    profile: {
      ...cardFooter,
      backgroundColor: Colors.secondary,
      color: Colors.text,
      justifyContent: 'center',
    }
  };
  
  export default cardFooterStyle;
  