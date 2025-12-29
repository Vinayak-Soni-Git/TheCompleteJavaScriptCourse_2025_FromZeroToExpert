const getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}

const whereAmI = async function () {
    // fetch(`https://restcountries.com/v2/name/${country}`).then(res => console.log(res))

    try {
        const pos = await getPosition()
        const {
            latitude: lat,
            longitude: lng
        } = pos.coords

        const geoResponse = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
        if (!geoResponse.ok) {
            throw new Error('Problem getting location data')
        }

        const geoData = await geoResponse.json()

        const response = await fetch(`https://restcountries.com/v2/name/${geoData.country}`)
        if (!response.ok) {
            throw new Error('Problem getting country')
        }

        const data = await response.json()
        renderCountry(data[0])
    } catch (error) {
        console.log(error)
        renderError(`Something went wrong ${err.message}`)
    }
}

whereAmI()
