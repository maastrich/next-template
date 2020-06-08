async function validation(id) {
    try {
        const res = await fetch(process.env.api + 'validation/' + id)
        return res;
    }
    catch (e) {
        console.error(e);
    }
    return null;
}

export default validation