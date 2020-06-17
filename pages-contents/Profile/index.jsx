import React from 'react'
import fetcher from 'fetch'
import Router from 'next/router';
import Cookies from 'js-cookie'

import dynamic from 'next/dynamic'

// const ProfileView = dynamic(
//     () => import('./ProfileView'),
//     {ssr: false}
// )
import ProfileView from './ProfileView'

function Profile() {
    const [datas, setDatas] = React.useState(null);
    const [render, setRender] = React.useState(<div />);
    const [mounted, setMounted] = React.useState(false);
    const getData = async () => {
        const res = await fetcher.profile();
        switch (res.status) {
            case 200:
                const resBody = await res.json();
                setDatas(resBody.authorizedData.user);
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
                console.error('An error occured');
                Router.push({
                    pathname: '/dashboard',
                    query: { error: 'An error occured, you have been redirected to dashboard' }
                });
        }
    }

    React.useEffect(() => {
        if (!datas)
            getData();
        if (datas && !mounted) {
            setRender(<ProfileView
                datas={datas}
            />)
            setMounted(true);
        }
    });
    return (render)
}

export default Profile;
