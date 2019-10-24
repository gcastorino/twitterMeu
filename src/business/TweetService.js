const URL_API = process.env.REACT_APP_URL_API

export async function tweet() {
    const response = await fetch(URL_API + '/tweets', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    if(!response.ok) {
        const erroServidor = await (response.json())
        const erroJS = Error(erroServidor.message) 
        erroJS.status = response.status
        throw erroJS
    }
    const tweet = await response.json()
    if(tweet) {
        console.log(tweet)
        return tweet
    }

    throw new Error([])
}