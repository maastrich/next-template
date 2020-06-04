import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import Lock from '@material-ui/icons/VpnKey';


const buttons = [
    {
        "name": 'fname',
        "label": 'First Name',
        "type": 'text',
        "regex": /[A-Za-z]+/,
        "icon": <People/>,
        "helper": 'Please provide a first name',
    },
    {
        "name": 'lname',
        "label": 'Last Name',
        "type": 'text',
        "regex": /[A-Za-z]+/,
        "icon": <People/>,
        "helper": 'Please provide a last name',
    },
    {
        "name": 'username',
        "label": 'Username',
        "type": 'text',
        "regex": /[A-Za-z]+/,
        "icon": <People/>,
        "helper": 'Please provide a username',
    },
    {
        "name": 'mail',
        "label": 'Email',
        "type": 'email',
        "regex": /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
        "icon": <Email/>,
        "helper": 'Please provide an email and make sure it\'s correct',
    },
    {
        "name": 'password',
        "label": 'Password',
        "type": 'password',
        "regex": /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        "icon": <Lock/>,
        "helper": 'Please provide a password and make sure it follow thoses rules:' + "\t- 8 charachters" +
        "\t- Uppercase characters (A-Z)\n" + "\t- Lowercase characters (a-z)" +
        "\t- Digits (0-9)" + "\t- Special characters (~!@#$%^&*_-+=`|(){}:;\"'<>,.?/)",
    },
    {
        "name": 'confirm',
        "label": 'Confirm Password',
        "type": 'password',
        "regex": /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
        "icon": <Lock/>,
        "helper": 'Please confirm your password',
    },
]

export default buttons;