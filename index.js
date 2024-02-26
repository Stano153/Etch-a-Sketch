const container = document.querySelector('#container');

function generateGrid(size) {
    container.innerHTML = '';
    let str = '<div id="container2">';
    for (let i = 0; i < size * size; i++) {
        str += '<div class="square"></div>';
    }
    str += '</div>';
    container.innerHTML += str;
    
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.width = container.clientWidth / size + 'px';
        square.style.height = container.clientHeight / size + 'px';

        square.addEventListener('mouseover', () => {
            changeColour(square);
        })
    });
};

function changeColour(square) {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    square.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

function newGrid() {
    let newSize = prompt('select size of grid');
    newSize = parseInt(newSize);
    if (isNaN(newSize) || newSize <= 0 || newSize > 100) {
        alert('Add number that is less than 100');
        return;
    }
    generateGrid(newSize);
}

generateGrid(16);














