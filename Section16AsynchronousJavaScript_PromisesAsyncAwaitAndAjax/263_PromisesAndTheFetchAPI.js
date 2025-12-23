const request = fetch('https://restcountries.com/v2/name/portugal')

const renderCountry = function (data, className = '') {
    const html = `<article class="country ${className}">
                      <img class="country__img" src="${data.flag}" />
                      <div class="country__data">
                        <h3 class="country__name">${data.name}</h3>
                        <h4 class="country__region">${data.region}</h4>
                        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
                        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
                      </div>
                    </article>`
    countriesContainer.insertAdjacentHTML('beforeend', html)
    countriesContainer.style.opacity = 1
}

const renderError = function (msg) {
    contriesContainer.insertAdjacentText('beforeend', msg)
    contriesContainer.style.opacity = 1
}

const getJSON = function (url, errorMsg) {
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error(`${errorMsg} (${response.status})`)
        }
        return response.json()
    })
}

const getCountryData = function (country) {
    // fetch(`https://restcountries.com/v2/name/${country}`)
    //     .then(function(response){
    //         console.log(response)
    //         return response.json()
    // }).then(function(data){
    //     console.log(data)
    //     renderCountry(data[0])
    // })
    fetch(`https://restcountries.com/v2/name/${country}`).then(response => {
        if (!response.ok) {
            throw new Error(`Country not found (${response.status})`)
        }
        response.json()
    }).then(data => {
        renderCountry(data[0])
        const neighbour = data[0].borders[0]
        if (!neighbour) return
        return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
    }).then(response => response.json()).then(data => renderCountry(data, 'neighbour')).catch(err => {
        alert(err)
        renderError(`Something went wrong ${err.message}. Try Again!`)
    }).finally(() => {
        countriesContainer.style.opacity = 1
    })
}

// getCountryData('portugal')

const getCountryDataAsync = function (country) {
    getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found').then(data => {
        renderCountry(data[0])
        const neighbour = 'dfsdsdfs'
        if (!neighbour) throw new Error('No neighbour found!')
        return getJSON('`https://restcountries.com/v2/alpha/${neighbour}`', 'Country not found')
    }).then(data => renderCountry(data, 'neighbour')).catch(err => {
        console.log(err)
        renderError(`Something went wrong ${err.message}. Try Again!`)
    }).finally(() => {
        countriesContainer.style.opacity = 1
    })
}
