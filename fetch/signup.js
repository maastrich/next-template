async function signup(inputs) {

    try {
        const res = await fetch(process.env.api + 'signup', {
            method: 'POST',
            headers: {
                'Access': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    fname: inputs['fname'],
                    lname: inputs['lname'],
                    mail: inputs['mail'],
                    username: inputs['username'],
                    password: inputs['password']
                }
            })
        })
        return res;
    }
    catch (e) {
        console.error(e);
    }
    return null;
}

export default signup