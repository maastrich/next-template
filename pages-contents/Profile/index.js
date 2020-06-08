import fetcher from 'fetch'
import Router from 'next/router';
import Cookies from 'js-cookie'

function Profile(props) {
    const getData = async () => {
        const res = await fetcher.profile();
        if (res.status === 200)
            console.log(await res.json());
        else if (res.status === 403) {
            if (Cookies.get('status'))
                Cookies.remove('token');
            Router.push({
                pathname: '/signin',
                query: {error: 'Must resign in'}
            });
        }
        else {
            console.log(res.status);
        }
    }
    getData();
    return (<div></div>)
}

export default Profile;