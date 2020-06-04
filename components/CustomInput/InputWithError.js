import CustomInput from './CustomInput'
import { FormHelperText } from '@material-ui/core'

export default function InputWithError(props) {
    const [help, setHelp] = React.useState(false);

    const onChange = (event) => {
        event.preventDefault();
        props.onChange(event.target.value)
        if (props.regex) {
            if (!event.target.value.match(props.regex)) {
                setHelp(true);
                props.match(false);
            }
            else {
                setHelp(false);
                props.match(true);
            }
        }
    }
    return (
        <div>
            <CustomInput
                inputProps={{
                    error: props.hasClick() && help,
                    onChange: onChange,
                    autoComplete: "on",
                    type: props.type,
                    key: props.labelText,
                    endAdornment: props.endAdornment
                }}
                labelText={props.labelText}
                id={props.id}
                formControlProps={{
                    fullWidth: true,
                    required: true
                }}
            />
            {help && <FormHelperText error={props.hasClick() && help}>{props.helper}</FormHelperText>}
        </div>
    )
}

export function FormInput(props) {

}