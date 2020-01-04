$(document).ready(() => {

    //program generates a random number 19 and 120
    let randNumber = Math.floor(Math.random() * ((120-19) +1) +19);
    $('#randNum').html(randNumber);

    // each crystal has a hidden value: random number between one and tweleve

    let sapphire = Math.floor(Math.random() * 12) + 1;
    let amethyst = Math.floor(Math.random() * 12) + 1;
    let ruby = Math.floor(Math.random() * 12) + 1;
    let emerald = Math.floor(Math.random() * 12) + 1;
}
// player clicks the crystals to display value to totalScore
let wins = 0;
let losses = 0;

let totalScore = 0;
$('#totalScore').text(totalScore);

function win() {
    wins = wins + 1;
    $('#wins').text(losses);
    resetTwo();
    reset();
}

function lose() {
    losses = losses + 1;
    $('#loses').text(lossses);
    resetTwo();
    reset();
}

$('#sapphire').click(() => {
    totalScore = totalScore + sapphire
    $('#totalScore').text(totalScore);
    if (totalScore === randNumber) {
        win();
        reset();
        resetTwo();
    } else if (totalScore > randNumber) {
        lose();
        reset();
        resetTwo();
    }
});

$('#amethyst').click(() => {
    totalScore = totalScore + amethyst
    $('#totalScore').text(totalScore);
    if (totalScore === randNumber) {
        win();
        reset();
        resetTwo();
    } else if (totalScore > randNumber) {
        lose();
        reset();
        resetTwo();
    }
});

$('#ruby').click(() => {
    totalScore = totalScore + ruby
    $('#totalScore').text(totalScore);
    if (totalScore === randNumber) {
        win();
        reset();
        resetTwo();
    } else if (totalScore > randNumber) {
        lose();
        reset();
        resetTwo();
    }
});

$('#emerald').click(() => {
    totalScore = totalScore + emerald
    $('#totalScore').text(totalScore);
    if (totalScore === randNumber) {
        win();
        reset();
        resetTwo();
    } else if (totalScore > randNumber) {
        lose();
        reset();
        resetTwo();
    }
});
// random number (crystals) get added all togther
// the script determines if players win or loses - winsLosses
//the page will not load, the game will restart
function reset() {
    totalScore = 0;
    $('#totalScore').text(totalScore);
} 

function resetTwo() {
    randNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    $('#randNum').html(randNumber);
    sapphire = Math.floor(Math.random() * 12) + 1;
    amethyst = Math.floor(Math.random() * 12) + 1;
    ruby = Math.floor(Math.random() * 12) + 1;
    emerald = Math.floor(Math.random() * 12) + 1;

}
});