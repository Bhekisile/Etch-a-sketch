const container = document.getElementById('container');

function makeGrid(rows, cols) {
   
    for (i=0; i < (rows * cols); i++) {
        const cell = document.createElement('div');
        cell.setAttribute('class', 'grid-item');
        cell.innerText = (i+1);
        container.appendChild(cell);
        container.setAttribute('style','grid-template-rows:(16, '+i+');');
        container.setAttribute('style','grid-template-columns:(16, '+i+');');
    }
}
makeGrid(16, 16);

