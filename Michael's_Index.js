const url = 'https://www.cheapshark.com/api/1.0/games?id=612'
// able to deals on a specific game
let title = "",
    cheapestPrice = 0,
    deals = [];

fetch(url)
    .then(response => response.text()) // send response body to next then chain
    .then(body => {
        result = JSON.parse(body)
        title = result.info.title
        cheapestPrice = result.cheapestPriceEver.price
        for (var item of result.deals) {
           deals.push({"storeID":item.storeID,
                       "dealID":item.dealID,
                       "price":item.price,
                       "retailPrice":item.retailPrice,
                       "savings":item.savings})
        }

        console.log(title + " \n"+ cheapestPrice)
        deals.forEach(element => {
            console.log(element.storeID + ": " + element.price + "\n")
        });
        
        addToTable(title, cheapestPrice )
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