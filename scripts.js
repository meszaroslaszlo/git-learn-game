document.getElementById("rollDiceBtn").addEventListener("click", function () {
    const diceResult = Math.floor(Math.random() * 6) + 1; // 1 és 6 közötti egész szám

    let message = "";
    switch (diceResult) {
        case 1:
            message = "😆 1-est dobtál! Mondj egy viccet, vagy igyál egy korty vizet! 💧";
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
            setTimeout(() => {
                document.getElementById("rollDiceBtn").click(); // Automatikus újradobás
            }, 2000);
            break;
    }

    document.getElementById("diceResult").innerHTML = `🎲${diceResult} <br> ${message}`;
});