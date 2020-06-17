import Cookies from 'js-cookie'

async function profile() {
    try {
        const res = await fetch(process.env.api + 'profile',
        {
            headers: {
                'authorization': 'Bearer ' + Cookies.get('token')
            }
        })
        return res;
    }
    catch (e) {
        console.error(e);
        return {
            status: 500
        }
    }
}

export default profile