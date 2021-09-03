const board = document.querySelector('#board');
const colors = [ '#66004D', '#7A005C', '#8F006B', '#A3007A', '#B8008A', '#CC0099', '#D11AA3', '#D633AD',
 '#DB4DB8', '#E066C2', '#E680CC', '#EB99D6',  '#F0B3E0'];
const SQUARES_NUMBER = 900; 

for(let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => 
        setColor(square)
    );

    square.addEventListener('mouseleave', removeColor); // другой способ записи (саму функцию тоже нужно изменить)

    board.append(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
    const element = event.target; // изменение функции, чтобы второй способ работал 
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}