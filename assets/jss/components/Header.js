import Colors from 'assets/colors';

const HeaderStyles = (theme) => {
    return {
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        appBar: {
            color: Colors.text,
            backgroundColor: Colors.primary
        }
    }
}

export default HeaderStyles;