import React from 'react'

import { makeStyles, Button } from '@material-ui/core'
import RounderImage from "react-rounded-image";

import { Modal, Card, Grid } from 'components'

import Colors from 'assets/colors'
import 'assets/css/preview.css'
import empty from "assets/img/empty.png"

import dynamic from 'next/dynamic'


const Avatar = dynamic(
    () => import('react-avatar-edit'),
    { ssr: false }
)

import styles from 'assets/jss/pages/profile'

const useStyles = makeStyles(styles);

function ProfilePicture(props) {
    const classes = useStyles();
    let { profilePicture, handleChanges } = props;
    const [preview, setPreview] = React.useState(null);

    const onClose = () => {
        setPreview(null);
    }

    const onCrop = (preview) => {
        setPreview(preview);
    }

    const handleImageChange = (newImage) => {
        handleChanges('profilePicture')(newImage);
    }


    const onChangePP = () => {
        handleImageChange(preview);
        onClose();
    }

    const onDeletePP = () => {
        handleImageChange(empty);
        onClose();
    }

    return (
        <Card.Container style="profile" variant="outlined">
            <Card.Header>
                Profile Picture
            </Card.Header>
            <Card.Body style="profile">
                <RounderImage
                    imageWidth="150"
                    roundedColor={Colors.primary}
                    imageHeight="150"
                    roundedSize="2"
                    image={profilePicture ? profilePicture : empty}
                />
            </Card.Body>
            <Card.Footer style="profile">
                <Modal
                    header='Update Profile Picture'
                    trigger={<Button className={classes.buttonInfo}>Edit</Button>}
                    actions={[{ onClick: onDeletePP ,key: 'delete', content: 'Delete', negative: true }, 'Cancel', { onClick: onChangePP ,key: 'done', content: 'Done', positive: true }]}
                >
                    <Grid.Container justify='center' spacing={7}>
                        <Grid.Item xs={8}>
                            <Avatar
                                width='auto'
                                height={300}
                                onCrop={onCrop}
                                onClose={onClose}
                                src={profilePicture}
                                shadingOpacity={0.9}
                            />
                        </Grid.Item>
                        <Grid.Item xs={4} className={classes.preview}>
                                <RounderImage
                                    imageWidth="150"
                                    imageHeight="150"
                                    roundedColor={Colors.primary}
                                    roundedSize="1"
                                    image={preview ? preview : empty}
                                />
                        </Grid.Item>
                    </Grid.Container>
                </Modal>
            </Card.Footer>
        </Card.Container>
    )
}

export default ProfilePicture