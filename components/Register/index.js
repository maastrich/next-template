import React from "react";
// @material-ui/core components
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";

import InputWithError from "../CustomInput/InputWithError";
import buttonList from './buttons'

import { Grid } from 'components'

let inputs = buttonList;

export default function Register(props) {
    const [but, setBut] = React.useState(0);
    const [match, setMatch] = React.useState(false);
    const [matchs, setMatchs] = React.useState([]);
    const [hasClick, setHasClick] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [buttonText, setButtonText] = React.useState('Next');
    let button = inputs[but];
    const onChange = variable => newValue => {
        setValue({...value, [variable]: value})
    }

    const onClick = () => {
        setHasClick(true);
        if (match) {
            setHasClick(false);
            setMatch(false);
            props.onChange(button.name)(value);
            if (but + 1 === inputs.length) {
                props.setLast()
            }
            setBut(but + 1)
            if (but === inputs.length - 2) {
                setButtonText('Register');
                inputs[inputs.length - 1].regex = new RegExp(value);
                setRender(buttonArray());
            }
            setValue(null);
            return;
        }
    }
    // const buttonArray = () => {
    //     let array = [];
    //     for (let index = 0; index != inputs.length; index++) {
    //         let button = inputs[index];
    //         const Icon = button.icon;
    //         array.push(
    //             <InputWithError
    //                 onChange={onChange}
    //                 labelText={button.label}
    //                 id={button.name}
    //                 type={button.type}
    //                 helper={button.helper}
    //                 regex={button.regex}
    //                 match={(match) => { setMatch(match) }}
    //                 hasClick={() => { return hasClick }}
    //                 endAdornment={<InputAdornment position="end">{button.icon}</InputAdornment>}
    //             />
    //         )
    //     }
    //     return array;
    // }
    // const [render, setRender] = React.useState(buttonArray());

    return (
        <>
            <form>
            {inputs.map((input, key) => {
                return <InputWithError
                        onChange={onChange(input.name)}
                        labelText={input.label}
                        id={input.id}
                        type={input.type}
                        helper={input.helper}
                        regex={input.regex}
                        match={(doesMatch) => {
                            let saveMatchs = matchs;
                            saveMatchs[key] = doesMatch;
                            setMatchs(saveMatchs);
                            let allMatch = (matchs.length === 6);
                            matchs.forEach((each) => {
                                console.log('yesy')
                                allMatch = allMatch && each
                            });
                            setMatch(allMatch);
                            console.log(match, matchs);
                        }}
                        hasClick={() => { return hasClick }}
                        endAdornment={<InputAdornment position="end">{button.icon}</InputAdornment>}
                />
                }
            )}
            </form>
            
                <Button disabled={!match} color="primary" onClick={onClick}>{buttonText}</Button>
            
        </>)
}
