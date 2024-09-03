const homeContainer = document.querySelector('#home');
const awayContainer = document.querySelector('#away');

const homeScore = document.querySelector('#home-score');
const awayScore = document.querySelector('#away-score');

let homeCounter = 0;

homeContainer.addEventListener('click', () => {
    homeCounter++;
    homeScore.innerHTML = homeCounter;
    console.log(`Placar: ${homeCounter} X ${awayCounter}`);
})

let awayCounter = 0;

awayContainer.addEventListener('click', () => {
    awayCounter++;
    awayScore.innerHTML = awayCounter;
    console.log(`Placar: ${homeCounter} X ${awayCounter}`);
})
