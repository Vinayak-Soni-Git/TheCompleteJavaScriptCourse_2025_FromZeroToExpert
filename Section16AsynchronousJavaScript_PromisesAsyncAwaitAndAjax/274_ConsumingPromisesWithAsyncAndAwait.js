const getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}

const whereAmI = async function () {
    // fetch(`https://restcountries.com/v2/name/${country}`).then(res => console.log(res))

    const pos = await getPosition()
    const {
        latitude: lat,
        longitude: lng
    } = pos.coords

    const geoResponse = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    const geoData = await geoResponse.json()

    const response = await fetch(`https://restcountries.com/v2/name/${geoData.country}`)
    const data = await response.json()
    renderCountry(data[0])
}

whereAmI()
