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
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/pages/LandingPage";

const useStyles = makeStyles(styles);

export default function ProductSection() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h1 className={classes.title}>Awesome Template</h1>
                    <h2 className={classes.title}>Let's talk about us</h2>
                    <h5 className={classes.description}>
                        Here you may decribe your company and project in about hundred words..
                        You may also talk about you're company/team history
          </h5>
                </GridItem>
            </GridContainer>
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Visualisation Tools"
                            description="Imagine being able to visualize in a single click the entire network of your company as well as all the breaches that could be related to it."
                            icon={VisibilityIcon}
                            iconColor="success"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Security"
                            description="Defensive security by checking all elements outside the network as soon as they appear.
              Offensive security thanks to our attack simulation tools that you control."
                            icon={SecurityIcon}
                            iconColor="danger"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Support"
                            description="Seven-day-a-week support for any major problem as well as advisers present five days a week to help and accompany you
              in your endeavors."
                            icon={ContactSupportIcon}
                            iconColor="info"
                            vertical
                        />
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
