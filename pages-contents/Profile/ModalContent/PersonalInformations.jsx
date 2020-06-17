import React from 'react'

import { Table, Modal } from 'components'

import { makeStyles, Button, TextField } from '@material-ui/core'

import PropTypes from 'prop-types'

import styles from 'assets/jss/pages/profile'

const useStyles = makeStyles(styles);

function InformationModal(props) {
    const classes = useStyles();
    let { onSubmit, ...rest } = props;
    let [formValues, setFormValues] = React.useState({
        mail: rest.mail,
        username: rest.username,
        fname: rest.fname,
        lname: rest.lname
    });

    const onChangeValue = variable => value => {
        setFormValues({ ...rest, [variable]: value.target.value });
    }

    const onClick = () => {
        onSubmit(formValues);
    }

    return (
        <Modal
            header='Update personal information'
            actions={['Cancel', { onClick: onClick, key: 'done', content: 'Done', positive: true }]}
            trigger={<Button className={classes.buttonInfo}>Edit</Button>}
            size="tiny"
        >
            Null variables will be ignored
            <Table.Container>
                <Table.Body>
                    <Table.Row key='username'>
                        <Table.Cell>Username</Table.Cell>
                        <Table.Cell align='right'><TextField
                            defaultValue={rest.username}
                            onChange={onChangeValue('username')}
                            placeholder='Username'
                        />
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row key='mail'>
                        <Table.Cell>Email</Table.Cell>
                        <Table.Cell align='right'><TextField
                            defaultValue={rest.mail}
                            onChange={onChangeValue('mail')}
                            placeholder='Mail'
                        />
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row key='fname'>
                        <Table.Cell>First Name</Table.Cell>
                        <Table.Cell align='right'><TextField
                            defaultValue={rest.fname}
                            onChange={onChangeValue('fname')}
                            placeholder='First Name'
                        /></Table.Cell>
                    </Table.Row>
                    <Table.Row key='lname'>
                        <Table.Cell>Last Name</Table.Cell>
                        <Table.Cell align='right'><TextField
                            defaultValue={rest.lname}
                            onChange={onChangeValue('lname')}
                            placeholder='Last Name'
                        /></Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table.Container>
        </Modal>
    )
}

InformationModal.propTypes = {
    mail: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    fname: PropTypes.string.isRequired,
    lname: PropTypes.string.isRequired
}

export default InformationModal