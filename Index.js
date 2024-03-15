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
        console.log(resBody)

    } catch (error)
    {
        console.error("Fetch error:",error);
    }

}

getListOfGames("batman")

