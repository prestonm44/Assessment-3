
//Use Nunjucks in Navbar - refer to Nunjucks recording in assessment 03. Maybe use nunjucks to template the header so I don't have to retype it all out each time I create a new HTML page.
//STEP 1: Once form is submitted, store response and direct user to stadium page.
    //Related assignments/labs that could help solve this: 
//STEP 2: Use NFL players on team API to display players for each of the 4 teams.
//STEP 3: If person clicks on their team's locker room, display team's players.
//STEP 4: If person clicks on opposing team's locker room, show alert saying "Get out of our locker room before mess you up!"


 document.querySelector('#team-value').addEventListener("submit", (evt) => {
    evt.preventDefault();

    const enteredTeam = document.querySelector('#team-name').value
    console.log(enteredTeam);
})
//When form submits push user to stadium page.

console.log('Hello world')