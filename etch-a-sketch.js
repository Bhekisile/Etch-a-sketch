const container = document.getElementById('container');

function makeGrid(rows, cols) {
   document.documentElement.style.setProperty("--columns-row", rows);
    for (i=0; i < (rows * cols); i++) {
        const cell = document.createElement('div');
        cell.setAttribute('class', 'grid-item');
        cell.innerText = (i+1);
        container.appendChild(cell);
        container.style.gridTemplateRows = 'repeat(${rows}, 1fr)';
        container.style.gridTemplateColumns = 'repeat(${cols}, 1fr)';
    }
    return;
}

function clickAlert() {
    let num = prompt("Please enter a number:", 16);
    if (num == null || num == "") {
        container.innerHTML = "Invalid number!";
    } else if (num >100) {
        container.innerHTML = "A number must not exceed 100"
    } else {
        container.innerHTML = "";
        makeGrid(num, num);
    }
    return;
    }
 