const url = 'https://www.cheapshark.com/api/1.0/games?id=612'
// able to deals on a specific game
let title = "",
    cheapestPrice = 0;

fetch(url)
    .then(response => response.text()) // send response body to next then chain
    .then(body => {
        result = JSON.parse(body)
        // console.log(result)
        title = result.info.title
        cheapestPrice = result.cheapestPriceEver.price
        console.log(title , cheapestPrice)
        addToTable(title, cheapestPrice)
    })


    function addToTable(title, cheapestPrice) {
        let table = document.getElementById('shark-data')
    
        let tableBody = table.getElementsByTagName('tbody')[0]
    
        // for(row of dataArr) {
        //     let newRow = document.createElement('tr')
            // plantID
            // scientificName
            // commonName
            // zone
            // size
            // adoptionDate
            let t = document.createElement('td')
            title.textContent = title
            let price = document.createElement('td')
            price.textContent = cheapestPriceEver
        
            newRow.appendChild(title)
            newRow.appendChild(price)
            tableBody.appendChild(newRow)
        // }
    }