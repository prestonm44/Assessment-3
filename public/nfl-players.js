
//CHIEFS PLAYER DATA//
function getPlayerInfoChiefs() {

axios.get('https://api.sportsdata.io/v3/nfl/scores/json/PlayersBasic/KC?key=53ac94d7422e4a65b18e03b16aeb7418')
    .then( (response) => {
        let playerList = " ";
        for (const player of response.data) {
            playerList += `<br><li>${player.Name},  ${player.Number}, ${player.Position}, ${player.College} </li>`;
        } 
        document.querySelector('#apiText').innerHTML =    
        playerList          
    })
}
    const kcButton = document.querySelector('.chiefs');
    kcButton.addEventListener('click', getPlayerInfoChiefs);


    
//RAVENS PLAYER DATA//    
function getPlayerInfoRavens() {
        axios.get('https://api.sportsdata.io/v3/nfl/scores/json/PlayersBasic/BAL?key=53ac94d7422e4a65b18e03b16aeb7418')
            .then( (response) => {
                let playerList = " ";
                for (const player of response.data) {
                    playerList += `<br><li>${player.Name},  ${player.Number}, ${player.Position}, ${player.College} </li>`;
                } 
                document.querySelector('#apiText').innerHTML =    
                playerList          
            })
        }
            const balButton = document.querySelector('.ravens');
            balButton.addEventListener('click', getPlayerInfoRavens);



//RAIDERS PLAYER DATA//    
function getPlayerInfoRaiders() {
    axios.get('https://api.sportsdata.io/v3/nfl/scores/json/PlayersBasic/LV?key=53ac94d7422e4a65b18e03b16aeb7418')
        .then( (response) => {
            let playerList = " ";
            for (const player of response.data) {
                playerList += `<br><li>${player.Name},  ${player.Number}, ${player.Position}, ${player.College} </li>`;
            } 
            document.querySelector('#apiText').innerHTML =    
            playerList          
        })
    }
        const lvButton = document.querySelector('.raiders');
        lvButton.addEventListener('click', getPlayerInfoRaiders);



//LIONS PLAYER DATA//    
function getPlayerInfoLions() {
    axios.get('https://api.sportsdata.io/v3/nfl/scores/json/PlayersBasic/DET?key=53ac94d7422e4a65b18e03b16aeb7418')
        .then( (response) => {
            let playerList = " ";
            for (const player of response.data) {
                playerList += `<br><li>${player.Name},  ${player.Number}, ${player.Position}, ${player.College} </li>`;
            } 
            document.querySelector('#apiText').innerHTML =    
            playerList          
        })
    }
        const detButton = document.querySelector('.lions');
        detButton.addEventListener('click', getPlayerInfoLions);