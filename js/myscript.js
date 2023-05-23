//Consegna

//L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

//? CREO L'ELEMENTO GRID

const gridElement = document.getElementById("grid")





//! CREO IL CICLO 

for (let index = 0; index < 100; index ++) {
    const actualCell = createCellElement("div", "cell");
    
    actualCell.addEventListener("click", function(){
        actualCell.classList.toggle("selected");
    })

    gridElement.appendChild(actualCell);
}




//* CREO LA FUNZIONE DELLA SINGOLA CELLA
function createCellElement(tagName, className){
    const cellElement = document.createCellElement(tagName);
    cellElement.className += className;
    return createCellElement;
}