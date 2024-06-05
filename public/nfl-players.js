

axios.get('https://api.sportsdata.io/v3/nfl/scores/json/PlayersBasic/SF?key=53ac94d7422e4a65b18e03b16aeb7418')
    .then( (response) => {
        document.querySelector('#apiText').innerText = JSON.stringify(response.data);
    })