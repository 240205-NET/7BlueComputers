async function getListOfGames(title)
{
    try
    {
        const resStream = await fetch("https://www.cheapshark.com/api/1.0/games?title="+title)
        if(!resStream.ok)
        {
            throw new Error("Network response was not ok")
        }
        const resBody = await resStream.json()
        const limitedData = resBody.slice(0,5)
        //addLimitedDataForFrontPage(limitedData)
        //addToTable(resBody)
        console.log(limitedData)

    } catch (error)
    {
        console.error("Fetch error:",error);
    }

}

function addLimitedDataForFrontPage(dataArr) {
    let table1 = document.getElementById('getLimitedGame')

    let tableBody1 = table1.getElementsByTagName('tbody')[0]

    for(row of dataArr) {
        let newRow = document.createElement('tr')

        let id = document.createElement('td')
        id.textContent = row.gameID
        let steamID = document.createElement('td')
        steamID.textContent = row.steamAppID
        let price = document.createElement('td')
        price.textContent = row.cheapest
        let fullTitle = document.createElement('td')
        fullTitle.textContent = row.external

        newRow.appendChild(id)
        newRow.appendChild(steamID)
        newRow.appendChild(price)
        newRow.appendChild(fullTitle)
    
        tableBody.appendChild(newRow)
    }
}
function addToTable(dataArr) {
    let table = document.getElementById('getAllGame')

    let tableBody = table.getElementsByTagName('tbody')[0]

    for(row of dataArr) {
        let newRow = document.createElement('tr')
        // gameID
        // steamAppID
        // cheapest
        // external
        // thumb
        let id = document.createElement('td')
        id.textContent = row.gameID
        let steamID = document.createElement('td')
        steamID.textContent = row.steamAppID
        let price = document.createElement('td')
        price.textContent = row.cheapest
        let fullTitle = document.createElement('td')
        fullTitle.textContent = row.external
        let jpg = document.createElement('td')
        jpg.textContent = row.thumb
    
        newRow.appendChild(id)
        newRow.appendChild(steamID)
        newRow.appendChild(price)
        newRow.appendChild(fullTitle)
        newRow.appendChild(jpg)
    
        tableBody.appendChild(newRow)
    }
}


getListOfGames("batman")