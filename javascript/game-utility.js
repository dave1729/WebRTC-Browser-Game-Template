"use strict";
var role = "server";
var offer;
function newGame() {
    changeLabel("new-game-label", " loading... ");
    var sdp = {
        "owner": role,
        "value": "JSON.stringify()"
    };
    postGame(JSON.stringify(sdp), role, printCrap);
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
    role = "client";
    var gameIdElement = document.getElementById("join-game-input");
    var gameId = gameIdElement == null ? "" : gameIdElement.value;
    getGame(gameId, role, printCrap2);
}
function changeLabel(labelId, newInnerText) {
    var gameIdElement = document.getElementById(labelId);
    if (gameIdElement !== null) {
        gameIdElement.innerText = newInnerText;
    }
}
//# sourceMappingURL=game-utility.js.map