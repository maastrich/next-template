import React from 'react'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow'

import Card, { CardHeader, CardBody, CardFooter } from 'components/Card'
import { makeStyles, Paper, Button, TextField } from '@material-ui/core'
import Modal from 'components/Modal'
import 'assets/css/preview.css'

import styles from 'assets/jss/pages/profile'

const useStyles = makeStyles(styles);

function ProfileAndUsername(props) {
    const classes = useStyles();
    let { mail, username, fname, lname } = props;
    const onClick = () => {

    }
    return (
        <Card style="profile" variant="outlined">
            <CardHeader>Personal Informations</CardHeader>
            <CardBody style="profile">
                <Table >
                    <TableBody>
                        <TableRow key='username'>
                            <TableCell component="th" scope="row">Username</TableCell>
                            <TableCell align="right">{username}</TableCell>
                        </TableRow>
                        <TableRow key='mail'>
                            <TableCell component="th" scope="row">Email</TableCell>
                            <TableCell align="right">{mail}</TableCell>
                        </TableRow>
                        <TableRow key='fname'>
                            <TableCell component="th" scope="row">First Name</TableCell>
                            <TableCell align="right">{fname}</TableCell>
                        </TableRow>
                        <TableRow key='lname'>
                            <TableCell component="th" scope="row">Last Name</TableCell>
                            <TableCell align="right">{lname}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardBody>
            <CardFooter style="profile">
                <Modal
                    header='Update personal information'
                    actions={['Cancel', { onClick: onClick, key: 'done', content: 'Done', positive: true }]}
                    trigger={<Button className={classes.buttonInfo}>Edit</Button>}
                    size="tiny"
                >
                    Each empty inout wont change value:
                    <Table >
                        <TableBody>
                            <TableRow key='username'>
                                <TableCell component="th" scope="row">Username</TableCell>
                                <TableCell align="right">
                                    <TextField
                                        defaultValue={username}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow key='mail'>
                                <TableCell component="th" scope="row">Email</TableCell>
                                <TableCell align="right">
                                <TextField
                                        defaultValue={mail}
                                    /></TableCell>
                            </TableRow>
                            <TableRow key='fname'>
                                <TableCell component="th" scope="row">First Name</TableCell>
                                <TableCell align="right">                                   <TextField
                                        defaultValue={fname}
                                    /></TableCell>
                            </TableRow>
                            <TableRow key='lname'>
                                <TableCell component="th" scope="row">Last Name</TableCell>
                                <TableCell align="right">                                   <TextField
                                        defaultValue={lname}
                                    /></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Modal>
            </CardFooter>
        </Card>

    )
}

export default ProfileAndUsername