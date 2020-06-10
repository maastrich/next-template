import React from 'react'
import fetcher from 'fetch'
import Router from 'next/router';
import Cookies from 'js-cookie'
import ProfilePicture from './ProfilePicture'
import Identifiants from './Identifiants'
import GridContainer from 'components/Grid/GridContainer'
import GridItem from 'components/Grid/GridItem'
import Colors from 'assets/colors'
import { Paper, makeStyles, Button } from '@material-ui/core'

import styles from 'assets/jss/pages/profile'

const useStyles = makeStyles(styles);

function Profile(props) {
    const classes = useStyles();
    const [data, setData] = React.useState(null);
    const [render, setRender] = React.useState(<div></div>)
    const getData = async () => {
        const res = await fetcher.profile();
        switch (res.status) {
            case 200:
                const resBody = await res.json();
                let datas = resBody.authorizedData.user
                setData(resBody.authorizedData.user);
                setRender(
                    <GridContainer justify='center'>
                        <GridItem xs={6}>
                            <ProfilePicture
                                profilePicture={datas.profilePicture}
                            />
                        </GridItem>
                        <GridItem xs={8}>
                            <Identifiants
                                {...datas}
                            />
                        </GridItem>
                        <GridItem xs={6}>
                            <GridContainer justify='center' spacing={3}>
                                <GridItem xs={4}>
                                        <Button className={classes.buttonDanger}>Discard Change</Button>
                                </GridItem>
                                <GridItem xs={4}>
                                        <Button className={classes.buttonPrimary}>Reset Password</Button>
                                </GridItem>
                                <GridItem xs={4}>
                                        <Button className={classes.buttonSuccess}>Save Change</Button>
                                </GridItem>
                            </GridContainer>
                        </GridItem>
                    </GridContainer>
                )
                break;
            case 403:
                if (Cookies.get('token'))
                    Cookies.remove('token');
                Router.push({
                    pathname: '/signin',
                    query: { error: 'Must resign in' }
                });
                break;
            default:
                console.log('An error occured');
        }
    }
    if (!data) {
        getData();
    }
    return (render)
}

export default Profile;