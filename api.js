function api(){
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => loadData(data))
}

function loadData(data){
   
    // console.log(data)
    const langSelector = document.querySelector('#lang')
    const CurrencySelector = document.querySelector('#Currency')

    data.forEach(element => {
        const options = document.createElement('option')
        const country = element.name
        options.innerText = country
        langSelector.appendChild(options)
    

    });
}

api()