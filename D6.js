/* ESERCIZIO 1
         Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
      */

const changeTitle = function () {
  const mainTitle = document.querySelector("h1");
  mainTitle[0].innerText = "Titolo modificato";
};
changeTitle();
/* ESERCIZIO 2
         Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
      */
const addClassToTitle = function () {
  const heading = document.querySelector("h1");
  heading.classList.add("MyHeading");
};
addClassToTitle();
/* ESERCIZIO 3
         Scrivi una funzione che cambi il testo dei p figli di un div
        */
const changePcontent = function () {
  const paragraphs = document.querySelectorAll("div > p");
  paragraphs.forEach((p) => {
    p.innerText = "Testo cambiato";
  });
};
changePcontent();
/* ESERCIZIO 4
         Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
        */

const changeUrls = function () {
  const allTheLinks = document.querySelectorAll("a:not(footer a)");
  for (let i = 0; i < allTheLinks.length; i++) {
    allTheLinks[i].setAttribute("href", "https://www.google.com");
  }
};

/* ESERCIZIO 5
         Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
      */

const addToTheSecond = function () {
  const list = document.getElementById("secondList");
  const newLi = document.createElement("li");
  newLi.innerText = "nuovo elemento";
  list.appendChild(newLi);
};
addToTheSecond();
/* ESERCIZIO 6
         Scrivi una funzione che aggiunga un paragrafo al primo div
      */

const addParagraph = function () {
  const firstDiv = document.querySelector("div");
  const newParagraph = document.addElement("p");
  newParagraph.innerText = "New paragraph";

  firstDiv.appendChild(newParagraph);
};

/* ESERCIZIO 7
         Scrivi una funzione che faccia scomparire la prima lista non ordinata
      */

const hideFirstUl = function () {
  const firstUl = document.querySelector("ul");
  firstUl.style.display = "none";
};
hideFirstUl();

/* ESERCIZIO 8
         Scrivi una funzione che renda verde il background di ogni lista non ordinata
        */

const paintItGreen = function () {
  const allUl = document.querySelectorAll("ul");
  allUl.forEach((ul) => {
    ul.style.backgroundColor = "green";
  });
};
paintItGreen();

/* ESERCIZIO 9
         Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
        */

const makeItClickable = function () {
  const h1 = document.querySelector("h1");
  h1.addEvenListener("Click", () => {
    innerText.h1 = innerText.h1.slice(0 - 1);
  });
};
makeItClickable();

/* ESERCIZIO 10
         Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
        */

const revealFooterLink = function () {
  const footer = document.querySelector("footer");
  footer.addEventListener("click", () => {
    const link = footer.querySelector("a");
    if (link) {
      alert(link.href);
    } else {
      alert("Nessun link trovato nel footer.");
    }
  });
};
revealFooterLink();

/* ESERCIZIO 11
         Crea una funzione che crei una tabella nell'elemento con id "tableArea".
         La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
      */

const generateTable = function () {
  const tableArea = document.getElementById("tableArea");

  // Creo la tabella
  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";
  table.style.width = "100%";

  // Creo l'intestazione
  const headerRow = document.createElement("tr");
  const headers = ["Immagine", "Nome Prodotto", "Quantità", "Prezzo"];

  headers.forEach((headerText) => {
    const th = document.createElement("th");
    th.innerText = headerText;
    th.style.border = "1px solid black";
    th.style.padding = "8px";
    headerRow.appendChild(th);
  });

  table.appendChild(headerRow);

  // Aggiunge 5 righe con dati fittizi
  for (let i = 1; i <= 5; i++) {
    const row = document.createElement("tr");

    // Immagine
    const imgCell = document.createElement("td");
    const img = document.createElement("img");
    img.src = "https://via.placeholder.com/50";
    img.alt = "Prodotto " + i;
    imgCell.appendChild(img);
    imgCell.style.border = "1px solid black";
    imgCell.style.padding = "8px";
    row.appendChild(imgCell);

    // Nome prodotto
    const nameCell = document.createElement("td");
    nameCell.innerText = `Prodotto ${i}`;
    nameCell.style.border = "1px solid black";
    nameCell.style.padding = "8px";
    row.appendChild(nameCell);

    // Quantità
    const qtyCell = document.createElement("td");
    qtyCell.innerText = Math.floor(Math.random() * 10) + 1;
    qtyCell.style.border = "1px solid black";
    qtyCell.style.padding = "8px";
    row.appendChild(qtyCell);

    // Prezzo
    const priceCell = document.createElement("td");
    priceCell.innerText = `${(Math.random() * 100).toFixed(2)} €`;
    priceCell.style.border = "1px solid black";
    priceCell.style.padding = "8px";
    row.appendChild(priceCell);

    table.appendChild(row);
  }

  // Aggiungo la tabella all’elemento #tableArea
  tableArea.appendChild(table);
};

generateTable();

/* ESERCIZIO 12
         Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
      */

const addRow = function (imgUrl, nomeProdotto, quantita, prezzo) {
  const table = document.querySelector("#tableArea table");

  if (!table) {
    alert("La tabella non esiste ancora! Crea prima la tabella.");
    return;
  }

  const row = document.createElement("tr");

  // Immagine
  const imgCell = document.createElement("td");
  const img = document.createElement("img");
  img.src = imgUrl;
  img.alt = nomeProdotto;
  img.width = 50;
  imgCell.appendChild(img);
  imgCell.style.border = "1px solid black";
  imgCell.style.padding = "8px";
  row.appendChild(imgCell);

  // Nome prodotto
  const nameCell = document.createElement("td");
  nameCell.innerText = nomeProdotto;
  nameCell.style.border = "1px solid black";
  nameCell.style.padding = "8px";
  row.appendChild(nameCell);

  // Quantità
  const qtyCell = document.createElement("td");
  qtyCell.innerText = quantita;
  qtyCell.style.border = "1px solid black";
  qtyCell.style.padding = "8px";
  row.appendChild(qtyCell);

  // Prezzo
  const priceCell = document.createElement("td");
  priceCell.innerText = `${prezzo} €`;
  priceCell.style.border = "1px solid black";
  priceCell.style.padding = "8px";
  row.appendChild(priceCell);

  table.appendChild(row);
};

/* ESERCIZIO 14
        Crea una funzione che nasconda le immagini della tabella quando eseguita
      */

const hideAllImages = function () {
  const images = document.querySelectorAll("#tableArea table img");
  images.forEach((img) => {
    img.style.display = "none";
  });
};

/* EXTRA ESERCIZIO 15
        Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
      */

const changeColorWithRandom = function () {
  const h2 = document.getElementById("changeMyColor");

  h2.addEventListener("click", () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    h2.style.color = randomColor;
  });
};

changeColorWithRandom();
