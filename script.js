document.addEventListener("DOMContentLoaded", () => {
  // Rufe die Render-Funktion auf, um die Tabelle zu erstellen
  renderTable();
});

let currentSymbol = "circle"; // Startsymbol

function renderTable() {
  const container = document.getElementById("ticTacToe");
  const table = document.createElement("table");

  // Erzeuge 3x3 Felder für das Tic Tac Toe Spiel
  for (let i = 0; i < 3; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 3; j++) {
      const cell = document.createElement("td");
      cell.dataset.row = i; // Speichere die Zeilennummer in dataset
      cell.dataset.col = j; // Speichere die Spaltennummer in dataset
      cell.addEventListener("click", () => onCellClick(cell)); // Füge den Klick-Eventlistener hinzu
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  container.appendChild(table);
}

function onCellClick(cell) {
  const rowNumber = cell.dataset.row; // Lese die Zeilennummer aus dataset
  const colNumber = cell.dataset.col; // Lese die Spaltennummer aus dataset

  // Überprüfe, ob das Feld bereits belegt ist
  if (cell.childElementCount > 0) {
    return; // Wenn ja, beende die Funktion und tue nichts
  }

  // Füge das passende Symbol-SVG-Code in das geklickte Feld ein
  const symbolSVG = currentSymbol === "circle" ? generateCircleSVG() : generateCrossSVG();
  cell.innerHTML = symbolSVG;

  // Wechsle zum anderen Symbol für den nächsten Klick
  currentSymbol = currentSymbol === "circle" ? "cross" : "circle";
}

function generateCircleSVG() {
  const color = '#00B0EF';
  const width = 70;
  const height = 70;

  return `<svg width="${width}" height="${height}">
            <circle cx="35" cy="35" r="30" stroke="${color}" stroke-width="5" fill="none">
              <animate attributeName="stroke-dasharray" from="0 188.5" to="188.5 0" dur="0.5s" fill="freeze" />
            </circle>
          </svg>`;
}

function generateCrossSVG() {
  const color = '#E64A19';
  const width = 70;
  const height = 70;

  return `<svg width="${width}" height="${height}">
            <line x1="10" y1="10" x2="60" y2="60" stroke="${color}" stroke-width="5">
              <animate attributeName="y1" from="60" to="10" dur="0.75s" fill="freeze" />
              <animate attributeName="y2" from="60" to="60" dur="0.75s" fill="freeze" />
            </line>
            <line x1="10" y1="60" x2="60" y2="10" stroke="${color}" stroke-width="5">
              <animate attributeName="y1" from="60" to="60" dur="0.75s" fill="freeze" />
              <animate attributeName="y2" from="60" to="10" dur="0.75s" fill="freeze" />
            </line>
          </svg>`;
}