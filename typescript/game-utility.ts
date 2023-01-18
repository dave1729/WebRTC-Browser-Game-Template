function newGame(){
    changeLabel("new-game-label", " loading... ");

    var objectAsString = '{"owner": "dave","id": "poop8","value": "words and what not7"}';
    postGame(objectAsString, printCrap);
}

function printCrap(object: any) {
    var exchangeAny = JSON.parse(object);
    var exchange = new Exchange(exchangeAny);
    console.log("object: " + object);

    changeLabel("new-game-label", exchange.exchangeId);
}
function printCrap2(object: string) {
    console.log("object: " + object);
}

function joinGame(id: string) {
    var gameIdElement = document.getElementById("join-game-input");
    var gameId = gameIdElement == null ? "" : (<HTMLInputElement>gameIdElement).value;
    getGame(gameId, printCrap2);
}

function changeLabel(labelId: string, newInnerText: string) {
    var gameIdElement = document.getElementById(labelId);
    if(gameIdElement !== null) {
        gameIdElement.innerText = newInnerText;
    }
}