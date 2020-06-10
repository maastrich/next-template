import React from 'react'
import GridContainer from 'components/Grid/GridContainer'
import GridItem from 'components/Grid/GridItem'
import empty from "assets/img/empty.png"
import RounderImage from "react-rounded-image";
// import { Modal } from 'react-bootstrap';
//import Avatar from 'react-avatar-edit'
import { makeStyles, Paper, Button } from '@material-ui/core'
import Card, { CardHeader, CardBody, CardFooter } from 'components/Card'
import Modal from 'components/Modal'
import Colors from 'assets/colors'
import 'assets/css/preview.css'

import dynamic from 'next/dynamic'

const Avatar = dynamic(
    () => import('react-avatar-edit'),
    { ssr: false }
)


import styles from 'assets/jss/pages/profile'

const useStyles = makeStyles(styles);

function ProfilePicture(props) {
    const classes = useStyles();
    let { profilePicture } = props;
    const [preview, setPreview] = React.useState(null);
    const [newImage, setNewImage] = React.useState(profilePicture ? profilePicture : empty);

    const onClose = () => {
        setPreview(null);
    }

    const onCrop = (preview) => {
        setPreview(preview);
    }

    const onChangePP = (event, data) => {
        setNewImage(preview);
        onClose();
    }

    const onDeletePP = () => {
        setNewImage(empty);
        onClose();
    }

    return (
        <Card style="profile" variant="outlined">
            <CardHeader>
                Profile Picture
            </CardHeader>
            <CardBody style="profile">
                <RounderImage
                    imageWidth="150"
                    roundedColor={Colors.primary}
                    imageHeight="150"
                    roundedSize="2"
                    image={newImage}
                />
            </CardBody>
            <CardFooter style="profile">
                <Modal
                    header='Update Profile Picture'
                    trigger={<Button className={classes.buttonInfo}>Edit</Button>}
                    actions={[{ onClick: onDeletePP ,key: 'delete', content: 'Delete', negative: true }, 'Cancel', { onClick: onChangePP ,key: 'done', content: 'Done', positive: true }]}
                >
                    <GridContainer justify='center' spacing={7}>
                        <GridItem xs={8}>
                            <Avatar
                                width='auto'
                                height={300}
                                onCrop={onCrop}
                                onClose={onClose}
                                src={profilePicture}
                                shadingOpacity={0.9}
                            />
                        </GridItem>
                        <GridItem xs={4}>
                            <div className="Preview">
                                Preview:
                                <RounderImage
                                    imageWidth="150"
                                    imageHeight="150"
                                    roundedColor={Colors.primary}
                                    roundedSize="1"
                                    image={preview ? preview : empty}
                                />
                            </div>
                        </GridItem>
                    </GridContainer>
                </Modal>
            </CardFooter>
        </Card>
    )
}

export default ProfilePicture