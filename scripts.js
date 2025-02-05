let currentPlayer = 1;

const currentPlayerHTML = document.getElementById("currentPlayer");
const playerTurnHTML = document.getElementById("playerTurn");
const rollSound = new Audio('assets/547929__scifisounds__dice-roll-2.mp3');
const laughSound = new Audio('assets/381375__funwithsound__laugh-crowd-1.mp3');
const cheerSound = new Audio('assets/371339__johanneskristjansson__cheer-crowd.mp3');

document.getElementById("rollDiceBtn").addEventListener("click", function () {
    rollSound.play();
    const diceResult = Math.floor(Math.random() * 6) + 1; // 1 és 6 közötti egész szám
    let message = "";
    switch (diceResult) {
        case 1:
            message = "😆 1-est dobtál! Mondj egy viccet, vagy igyál egy korty vizet! 💧";
            laughSound.play();
            break;
        case 2:
            message = "😅 2-est dobtál! Nem rossz, de lehetne jobb is... 🤷‍♂️";
            break;
        case 3:
            message = "😂 3-as! Képzeld el, hogy ez egy szerencseszám! 🍀";
            break;
        case 4:
            message = "🤣 4-es! Majdnem ötös, de nem egészen. 😜";
            break;
        case 5:
            message = "🤔 5-ös! Egy hajszál választott el a dupla dobástól!";
            break;
        case 6:
            message = "🔥 6-ost dobtál! Dobhatsz még egyszer! 🎉";
            cheerSound.play();
            setTimeout(() => {
                document.getElementById("rollDiceBtn").click(); // Automatikus újradobás
            }, 2000);
            break;
    }

    document.getElementById("diceResult").innerHTML = `🎲${diceResult} <br> ${message}`;

    if (currentPlayer === 1) {
        changePlayer(2);
    } else {
        changePlayer(1);
    }
});

function changePlayer(nextPlayer) {
    currentPlayerHTML.innerHTML = `Játékos ${currentPlayer} dobása`;
    playerTurnHTML.innerHTML = `Most játékos ${nextPlayer} jön`;
    currentPlayer = nextPlayer; // következő játékos
}