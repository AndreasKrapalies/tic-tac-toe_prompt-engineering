function init(){
    render();
}

function render() {
    let container = document.getElementById('content');
    let table = document.createElement('table');
    table.classList.add('table');

    for (let i = 0; i < 3; i++) {
        let row = document.createElement('tr');

        for (let j = 0; j < 3; j++) {
            let cell = document.createElement('td');
            let index = i * 3 + j;
            let fieldValue = fields[index];

            if (fieldValue === 'circle') {
                cell.textContent = 'O';
            } else if (fieldValue === 'cross') {
                cell.textContent = 'X';
            }

            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    container.innerHTML = '';
    container.appendChild(table);
}