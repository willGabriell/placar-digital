const homeContainer = document.querySelector('#home');
const awayContainer = document.querySelector('#away');

const homeScore = document.querySelector('#home-score');
const awayScore = document.querySelector('#away-score');

const homeMinus = document.querySelector('#home-minus');
const awayMinus = document.querySelector('#away-minus');

let homeCounter = 0;

homeContainer.addEventListener('click', () => {
    homeCounter++;
    homeScore.innerHTML = homeCounter;
    console.log(`Placar: ${homeCounter} X ${awayCounter}`);
})

homeMinus.addEventListener('click', () => {
    if (homeCounter > 0) {
        homeCounter--;
        homeScore.innerHTML = homeCounter;
        console.log(`Placar: ${homeCounter} X ${awayCounter}`);
    }
})

let awayCounter = 0;

awayContainer.addEventListener('click', () => {
    awayCounter++;
    awayScore.innerHTML = awayCounter;
    console.log(`Placar: ${homeCounter} X ${awayCounter}`);
})

awayMinus.addEventListener('click', () => {
    if (awayCounter > 0) {
        awayCounter--;
        awayScore.innerHTML = awayCounter;
        console.log(`Placar: ${homeCounter} X ${awayCounter}`);
    }
})
