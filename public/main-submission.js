
let enteredTeam = ''
//get the value of the dropdown
function getTeamValue() {
 document.querySelector('#team-value').addEventListener("submit", (evt) => {
    evt.preventDefault();

    enteredTeam = document.querySelector('#team-name').value
    console.log(enteredTeam);
    })
}
getTeamValue()

// //HANDLE PLAYER INFO FOR CHIEFS
// function handlePlayerInfo(enteredTeam) {
//     const kcButton = document.querySelector('.chiefs');
//     kcButton.removeEventListener('click', getPlayerInfoChiefs);

//  if (enteredTeam === 'Chief') {
//         kcButton.addEventListener('click', getPlayerInfoChiefs);
//         } else {
//         kcButton.addEventListener('click', () => alert("Get out!"))
//      }
// }

export { getTeamValue, enteredTeam }