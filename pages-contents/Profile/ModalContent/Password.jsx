import React from 'react'
import { TextField, makeStyles, Button } from '@material-ui/core';
import { useSnackbar } from 'notistack'
import Modal from 'components/Modal'
import fetcher from 'fetch'
import PropTypes from 'prop-types'

import styles from 'assets/jss/pages/profile'
const useStyles = makeStyles(styles);


function PasswordModal(props) {
    const classes = useStyles();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    let helper = 'Please provide a password and make sure it follow thoses rules:' + "\t- 8 charachters" +
    "\t- Uppercase characters (A-Z)\n" + "\t- Lowercase characters (a-z)" +
    "\t- Digits (0-9)" + "\t- Special characters (~!@#$%^&*_-+=`|(){}:;\"'<>,.?/)";
    const { handleChanges } = props;
    const [ confirmed, setConfirmed ] = React.useState(false);
    const [passwords, setPasswords] = React.useState({
        password: null,
        newPassword: null,
        confirm: null
    });

    const handleVarriant = variant => message => {
        enqueueSnackbar(message, {variant})
    }

    const handleChange = variable => async eventValue => {
        eventValue.preventDefault();
        const value = await eventValue.target.value;
        console.log(value);
        setPasswords({ ...passwords, [variable]: value });
        if (variable === 'newPassword' || variable === 'confirm')
            setConfirmed(passwords.newPassword === passwords.confirm);
        console.log(passwords.newPassword, passwords.confirm, passwords.newPassword === passwords.confirm);
    }

    const handleSubmit = async () => {
        console.log(passwords);
        if (passwords.newPassword === passwords.confirm) {
            const res = await fetcher.update.password(passwords.password, passwords.newPassword);
            const resBody = await res.json();
            switch (res.status) {
                case 200:
                    handleVarriant('success')(resBody.message);
                    break;
                default:
                    handleVarriant('error')(resBody.error);
                    break;
            }
        }
        else
            handleVarriant('error')('New passwords didn\'t match');
        
    }

    return (
        <Modal
            trigger={<Button className={classes.buttonPrimary}>Reset Password</Button>}
            header='Reset Password'
            actions={['Cancel', { onClick: handleSubmit, key: 'done',content: 'Change Password', positive: true }]}
            size="tiny"
        >
            <h3>Your password:</h3>
            <TextField
                placeholder='Password'
                onChange={handleChange('password')}
                type='password'
            />
            <h3>New Password:</h3>
            <div>
                <TextField
                    placeholder='New Password'
                    onChange={handleChange('newPassword')}
                    type='password'
                />
            </div>
            <div>
                <TextField
                    placeholder='Confirm Password'
                    onChange={handleChange('confirm')}
                    type='password'
                />
            </div>
            <p>{helper}</p>
        </Modal>
    );
}

export default PasswordModal

PasswordModal.propTypes = {
    handleChanges: PropTypes.func.isRequired
}