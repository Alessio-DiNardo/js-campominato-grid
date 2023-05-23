//Consegna

//L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


//* GENERO L'ELEMENTO GRID CHE è COLLEGATO CON IL DIV IN HTML
const gridElement = document.getElementById("grid")





//! CREO IL CICLO 
//* CREO IL CICLO FOR PERCHè SO QUANTE CELLE DEVO METTERE NELLA GRID 
for (let index = 0; index < 100; index ++) {
    //* DEFINISCO CON UNA VARIABILE GLI ELEMENTI DEL CICLO
    const actualCell = createElement("div", "cell");
    //* AGGIUNGO ALLA CELLA LA FUNZIONE PER FARLA CAMBIARE DI COLORE
    actualCell.addEventListener("click", function(){
        actualCell.classList.toggle("selected");
    });
    gridElement.appendChild((actualCell));
}




//* CREO LA FUNZIONE DELLA SINGOLA CELLA
function createElement(tagName, className){
    //* GENERO LA VARIABILE DELLA CELLA
    const cellElement = document.createElement(tagName);
    cellElement.className += className;
    //* RESTITUISCO A CHI CHIAMA L'ELEMENTO 
    return cellElement;
}


//* DEEVO SELEZIONARE IL BOTTONE PER ATTIVARE LA GRIGLIA

const button = document.querySelector("button");

button.addEventListener("click", function()) {

}