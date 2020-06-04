import React from "react";
import Form from './Form'
import RedirectSignin from './RedirectSignin'

export default function Signup(props) {
    const [formComplete, setFormComplete] = React.useState(false);
    const [mail, setMail] = React.useState(null);
    const complete = (email) => {
        setMail(email);
        setFormComplete(true);
    }
    return formComplete ? <RedirectSignin {...props} mail={mail}/> : <Form {...props} complete={complete}/>
}