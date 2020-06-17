import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import Lock from '@material-ui/icons/VpnKey';


const buttons = [
    {
        name: 'fname',
        id: "first-name",
        labelText: 'First Name',
        type: 'text',
        regex: /[A-Za-z]+/,
        icon: <People/>,
        autoComplete: 'on',
        helper: 'Please provide a first name',
    },
    {
        name: 'lname',
        id: "last-name",
        labelText: 'Last Name',
        type: 'text',
        regex: /[A-Za-z]+/,
        icon: <People/>,
        helper: 'Please provide a last name',
        autoComplete: 'on',
    },
    {
        name: 'username',
        labelText: 'Username',
        id: "username",
        type: 'text',
        regex: /[A-Za-z]+/,
        icon: <AlternateEmailIcon/>,
        helper: 'Please provide a username',
        autoComplete: 'on',
    },
    {
        name: 'mail',
        labelText: 'Email',
        id: "email",
        type: 'email',
        regex: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
        icon: <Email/>,
        helper: 'Please provide an email and make sure it\'s correct',
        autoComplete: 'on',
    },
    {
        name: 'password',
        labelText: 'Password',
        id: "password",
        type: 'password',
        regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        icon: <Lock/>,
        helper: <>
            {'Please provide a password and make sure it follow thoses rules:'}<br/>
            {"\t- 8 charachters" }<br/>
            {"\t- Uppercase characters (A-Z)\n"}<br/>
            {"\t- Lowercase characters (a-z)"}<br/>
            {"\t- Digits (0-9)"}<br/>
            {"\t- Special characters (~!@#$%^&*_-+=`|(){}:;\"'<>,.?/)"}</>,
        autoComplete: 'on',
    },
    {
        name: 'confirm',
        id: "confirm-password",
        labelText: 'Confirm Password',
        type: 'password',
        icon: <Lock/>,
        helper: 'Please confirm your password',
    },
]

export default buttons;