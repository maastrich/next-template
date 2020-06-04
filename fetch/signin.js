async function signin(identifiant, password) {

    try {
        const res = await fetch(process.env.api + 'signin', {
            method: 'POST',
            headers: {
                'Access': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                identifiant: identifiant,
                password: password
            })
        })
        return res;
    }
    catch (e) {
        console.error(e);
    }
    return null;
}

export default signin