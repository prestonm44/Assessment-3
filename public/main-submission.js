//get the value of the dropdown

 document.querySelector('#team-value').addEventListener("submit", (evt) => {
    evt.preventDefault();

    const enteredTeam = document.querySelector('#team-name').value
    console.log(enteredTeam);
})

// getTeamValue()

// //HANDLE PLAYER INFO FOR CHIEFS
// function handlePlayerInfo(team) {
//     const kcButton = document.querySelector('.chiefs');
//     kcButton.removeEventListener('click', getPlayerInfoChiefs);

//  if (team === 'Chief') {
//         kcButton.addEventListener('click', getPlayerInfoChiefs);
//         } else {
//         kcButton.addEventListener('click', () => alert("Get out!"))
//      }
// }