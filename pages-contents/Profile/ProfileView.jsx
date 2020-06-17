import React from 'react'
import ProfilePicture from './ProfilePicture'
import Identifiants from './Identifiants'
import { Grid } from 'components'
import { makeStyles, Button } from '@material-ui/core'
import PropTypes from "prop-types";
import Modal from './ModalContent'

import styles from 'assets/jss/pages/profile'

const useStyles = makeStyles(styles);

function ProfileView(props) {
    const classes = useStyles();
    let { datas } = props;
    console.log(datas);
    const [infos, setInfos] = React.useState(datas);
    const [defaultInfos, setDefault] = React.useState(datas);
    const [mounted, setMounted] = React.useState(false);

    const handleChanges = info => async (newValue) => {
        setInfos({ ...infos, [info]: newValue })
        return true;
    };
    const handleChange = (newValues) => {
        setInfos({...infos, ...newValues})
    }

    const onClickDefault = () => {
        setInfos(defaultInfos);
    }

    React.useEffect(() => {
        if (!mounted) {
            setMounted(true);
        }
    }, [])
    return (
        <Grid.Container justify='center'>
            <Grid.Item xs={6}>
                <ProfilePicture
                    profilePicture={infos.profilePicture}
                    handleChanges={handleChanges}
                />
            </Grid.Item>
            <Grid.Item xs={8}>
                <Identifiants
                    {...infos}
                    handleChange={handleChange}
                />
            </Grid.Item>
            <Grid.Item xs={6}>
                <Grid.Container justify='center' spacing={3}>
                    <Grid.Item xs={4}>
                        <Button
                            className={classes.buttonDanger}
                            onClick={onClickDefault}
                        >Discard Change</Button>
                    </Grid.Item>
                    <Grid.Item xs={4}>
                        <Modal.Password
                            handleChanges={handleChanges}
                            password={infos.password}
                        />
                    </Grid.Item>
                    <Grid.Item xs={4}>
                        <Button className={classes.buttonSuccess}>Save Change</Button>
                    </Grid.Item>
                </Grid.Container>
            </Grid.Item>
        </Grid.Container>
    )
}

ProfileView.propTypes = {
    datas: PropTypes.object.isRequired
}

export default ProfileView;