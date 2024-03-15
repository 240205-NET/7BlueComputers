const url = 'https://www.cheapshark.com/api/1.0/games?id=612'
// able to deals on a specific game

fetch(url)
    .then(response => response.text()) // send response body to next then chain
    .then(body => {
        console.log(JSON.parse(body))
    })