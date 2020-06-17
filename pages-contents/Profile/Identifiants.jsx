import React from 'react'

import { Table, Card } from 'components'

import Modal from './ModalContent'

import { makeStyles } from '@material-ui/core'

import PropTypes from 'prop-types'

import styles from 'assets/jss/pages/profile'

const useStyles = makeStyles(styles);

function ProfileAndUsername(props) {
    const classes = useStyles();
    const { mail, username, fname, lname, handleChange, ...rest } = props;

    const onSubmit = (submittedValues) => {
        handleChange({...submittedValues, ...rest});
    }

    return (
        <Card.Container style="profile" variant="outlined">
            <Card.Header>Personal Informations</Card.Header>
            <Card.Body style="profile">
                <Table.Container className={classes.profileTable}>
                    <Table.Body>
                        <Table.Row key='username'>
                            <Table.Cell className={classes.profileTableVar} >Username</Table.Cell>
                            <Table.Cell className={classes.profileTableVal} align='right'>{username}</Table.Cell>
                        </Table.Row>
                        <Table.Row key='mail'>
                            <Table.Cell className={classes.profileTableVar}>Email</Table.Cell>
                            <Table.Cell className={classes.profileTableVal} align='right'>{mail}</Table.Cell>
                        </Table.Row>
                        <Table.Row key='fname'>
                            <Table.Cell className={classes.profileTableVar}>First Name</Table.Cell>
                            <Table.Cell className={classes.profileTableVal} align='right'>{fname}</Table.Cell>
                        </Table.Row>
                        <Table.Row key='lname'>
                            <Table.Cell className={classes.profileTableVar}>Last Name</Table.Cell>
                            <Table.Cell className={classes.profileTableVal} align='right'>{lname}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table.Container>
            </Card.Body>
            <Card.Footer style="profile">
                <Modal.PersonalInformations
                    mail={mail}
                    username={username}
                    fname={fname}
                    lname={lname}
                    onSubmit={onSubmit}
                />
            </Card.Footer>
        </Card.Container>

    )
}

ProfileAndUsername.propTypes = {
    username: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
    fname: PropTypes.string.isRequired,
    lname: PropTypes.string.isRequired,
}

export default ProfileAndUsername