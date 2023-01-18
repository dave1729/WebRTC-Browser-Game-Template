"use strict";
function newGame() {
    changeLabel("new-game-label", " loading... ");
    var objectAsString = '{"owner": "dave","id": "poop8","value": "words and what not7"}';
    postGame(objectAsString, printCrap);
}
function printCrap(object) {
    var exchangeAny = JSON.parse(object);
    var exchange = new Exchange(exchangeAny);
    console.log("object: " + object);
    changeLabel("new-game-label", exchange.exchangeId);
}
function printCrap2(object) {
    console.log("object: " + object);
}
function joinGame(id) {
    var gameIdElement = document.getElementById("join-game-input");
    var gameId = gameIdElement == null ? "" : gameIdElement.value;
    getGame(gameId, printCrap2);
}
function changeLabel(labelId, newInnerText) {
    var gameIdElement = document.getElementById(labelId);
    if (gameIdElement !== null) {
        gameIdElement.innerText = newInnerText;
    }
}
//# sourceMappingURL=game-utility.js.map