import Cookies from 'js-cookie'

async function password(password, newPassword) {
    try {
        const res = await fetch(process.env.api + 'update/password', {
            method: 'POST',
            headers: {
                'Access': 'application/json',
                'Content-Type': 'application/json',
                'authorization': 'Bearer ' + Cookies.get('token')
            },
            body: JSON.stringify({
                password: password,
                newPassword: newPassword
            })
        })
        return res;
    }
    catch (e) {
        console.error(e);
    }
    return null;
}

export default password