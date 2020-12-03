const API_KEY = "vDRga7DaoSgCowHeLpiPe1nxn0D2";

// To get all matches

export const getMatches = () => {
    const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`;

    return fetch(url)
        .then((response) => response.json())
        .catch((error) =>{console.log("ERROR : ",error)});
 };

 // To get score of matches

export const getMatchesDetails = (id) => {
    const url = `https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`;

    return fetch(url)
        .then((response) => response.json())
        .catch((error) =>{console.log("ERROR : ",error)});
 };