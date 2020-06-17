import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import VisibilityIcon from '@material-ui/icons/Visibility';
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import SecurityIcon from '@material-ui/icons/Security';
import Fingerprint from "@material-ui/icons/Fingerprint";
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
// core components
import { Grid } from 'components'
import InfoArea from "components/InfoArea/InfoArea";

import styles from "assets/jss/pages/LandingPage";

const useStyles = makeStyles(styles);

export default function ProductSection() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <Grid.Container justify="center">
                <Grid.Item xs={12} sm={12} md={8}>
                    <h1 className={classes.title}>Awesome Template</h1>
                    <h2 className={classes.title}>Let's talk about us</h2>
                    <h5 className={classes.description}>
                        Here you may decribe your company and project in about hundred words..
                        You may also talk about you're company/team history
          </h5>
                </Grid.Item>
            </Grid.Container>
            <div>
                <Grid.Container>
                    <Grid.Item xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Durability"
                            description="Describe one of your feature, choose your words proprely, it is the first view of your compagny"
                            icon={VisibilityIcon}
                            iconColor="success"
                            vertical
                        />
                    </Grid.Item>
                    <Grid.Item xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Reliability"
                            description="Describe one of your feature, choose your words proprely, it is the first view of your compagny"
                            icon={SecurityIcon}
                            iconColor="danger"
                            vertical
                        />
                    </Grid.Item>
                    <Grid.Item xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Excellence"
                            description="Describe one of your feature, choose your words proprely, it is the first view of your compagny"
                            icon={ContactSupportIcon}
                            iconColor="info"
                            vertical
                        />
                    </Grid.Item>
                </Grid.Container>
            </div>
        </div>
    );
}
