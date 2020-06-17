import CustomInput from './CustomInput'
import { FormHelperText, InputAdornment } from '@material-ui/core'
import PropTypes from 'prop-types'

export default function InputWithError(props) {
    const [help, setHelp] = React.useState(false);
    const {
        icon,
        helper,
        labelText,
        type,
        onChange,
        autoComplete,
        id,
        regex,
        error,
        match
    } = props;

    const handleChange = (event) => {
        event.preventDefault();
        onChange(event.target.value)
        if (regex) {
            if (!event.target.value.match(regex)) {
                setHelp(true);
                match(false);
            }
            else {
                setHelp(false);
                match(true);
            }
        }
        else {
            match(true);
        }
    }
    return (
        <div>
            <CustomInput
                inputProps={{
                    error: error,
                    onChange: handleChange,
                    autoComplete: autoComplete,
                    type: type,
                    key: id,
                    id: id,
                    endAdornment: <InputAdornment position="end">{icon}</InputAdornment>
                }}
                labelText={labelText}
                id={id}
                formControlProps={{
                    id: id,
                    fullWidth: true,
                    required: true
                }}
            />
            {helper && help && <FormHelperText>{helper}</FormHelperText>}
        </div>
    )
}

InputWithError.propTypes = {
    icon: PropTypes.node.isRequired,
    id: PropTypes.any.isRequired,
    type: PropTypes.string,
    labelText: PropTypes.string,
    regex: PropTypes.object,
    helper: PropTypes.any,
    error: PropTypes.bool,
    autoComplete: PropTypes.string
}

InputWithError.defaultProps = {
    error: false,
    helper: null,
    labelText: null,
    regex: null,
    type: 'text',
    autoComplete: 'off'
}