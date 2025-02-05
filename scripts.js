document.getElementById("rollDiceBtn").addEventListener("click",function () {
   const diceResult = Math.floor(Math.random*6)+1; // 1 és 6 közötti egész szám
   document.getElementById(diceResult).innerHTML = `🎲${diceResult}` ;
});