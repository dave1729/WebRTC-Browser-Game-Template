"use strict";
function newGame() {
    var objectAsString = '{"owner": "dave","id": "poop8","value": "words and what not7"}';
    postGame(objectAsString, printCrap);
}
function printCrap(object) {
    var exchangeAny = JSON.parse(object);
    var exchange = new Exchange(exchangeAny);
    console.log("object: " + object);
    var gameIdElement = document.getElementById("new-game-label");
    if (gameIdElement !== null) {
        gameIdElement.innerText = exchange.exchangeId;
    }
}
function printCrap2(object) {
    console.log("object: " + object);
}
function joinGame(id) {
    var gameIdElement = document.getElementById("join-game-input");
    var gameId = gameIdElement == null ? "" : gameIdElement.value;
    getGame(gameId, printCrap2);
}
//# sourceMappingURL=game-utility.js.map