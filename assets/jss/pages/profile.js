import Colors from 'assets/colors'
import buttonStyles from 'assets/jss/components/Button'
import paperStyle from 'assets/jss/components/Paper'
import tableStyles from 'assets/jss/components/Table'

const profile = {
    ...buttonStyles,
    ...paperStyle,
    ...tableStyles,
    preview: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
}

export default profile;