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
        console.log(title + "\n" + cheapestPrice)
    })
    