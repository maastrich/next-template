import React from "react";
// @material-ui/core components
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";

import InputWithError from "../CustomInput/InputWithError";
import buttonList from './buttons'

let buttons = buttonList;

export default function Register(props) {
    const [but, setBut] = React.useState(0);
    const [match, setMatch] = React.useState(false);
    const [hasClick, setHasClick] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [buttonText, setButtonText] = React.useState('Next');
    let button = buttons[but];
    const onChange = (newValue) => {
        setValue(newValue);
    }
    const onClick = () => {
        setHasClick(true);
        if (match) {
            setHasClick(false);
            setMatch(false);
            props.onChange(button.name)(value);
            if (but + 1 === buttons.length) {
                props.setLast()
            }
            setBut(but + 1)
            if (but === buttons.length - 2) {
                setButtonText('Register');
                buttons[buttons.length - 1].regex = new RegExp(value);
                setRender(buttonArray());
            }
            setValue(null);
            return;
        }
    }
    const buttonArray = () => {
        let array = [];
        for (let index = 0; index != buttons.length; index++) {
            let button = buttons[index];
            const Icon = button.icon;
            array.push(
                <InputWithError
                    onChange={onChange}
                    labelText={button.label}
                    id={button.name}
                    type={button.type}
                    helper={button.helper}
                    regex={button.regex}
                    match={(match) => { setMatch(match) }}
                    hasClick={() => { return hasClick }}
                    endAdornment={<InputAdornment position="end">{button.icon}</InputAdornment>}
                />
            )
        }
        return array;
    }
    const [render, setRender] = React.useState(buttonArray());

    return (<div>
        {render[but]}
    <Button disabled={!match} color="primary" onClick={onClick}>{buttonText}</Button>
    </div>)
}
