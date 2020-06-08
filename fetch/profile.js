import Cookies from 'js-cookie'

async function validation(id) {
    try {
        const res = await fetch(process.env.api + 'profile',
        {
            headers: {
                'Authorization': 'Bearer ' + Cookies.get('token')
            }
        })
        return res;
    }
    catch (e) {
        console.error(e);
    }
    return null;
}

export default validation