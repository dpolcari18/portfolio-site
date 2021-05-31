const getFetchCall = async (url) => {

    const getObj = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    
    
    const getCall = await fetch(url, getObj)
    const getRes = await getCall.json()

    return getRes
}

export { getFetchCall }