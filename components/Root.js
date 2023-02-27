import Letter from "./Letter.js";
import determineStyle from "./determineStyle.js";

const generateRandomCol = (columns) => {
    const randomCol = Math.floor(Math.random() * 12);

    if (columns.includes(randomCol)) return generateRandomCol(columns);

    return randomCol;
};

const Root = () => {
    const name = ['A', 'A', 'R', 'O', 'N', '', 'B', 'I', 'S', 'H', 'O', 'P'];
    const cols = [];
  
    const header = document.getElementById('header-root');
  
    for (let i = 0; i < name.length; i++) {
        const newCol = document.createElement('div');

        newCol.style.width = '3.6vw';
        newCol.style.height = '14vh';
        newCol.style.margin = '0.4vw';

        header.append(newCol);

        newCol.id = `col${i}`;
        cols.push(i);
    };
  
    const visitedCols = [];
  
    for (let i = 0; i < name.length; i++) {
        const randomCol = generateRandomCol(visitedCols);
        const currCol = document.getElementById(`col${randomCol}`);

        if (!name[randomCol].length) {
            const blankEl = document.createElement('div');
            visitedCols.push(randomCol);
            currCol.appendChild(blankEl);
            continue;
        };

        const newLetter = Letter(name[randomCol], determineStyle(name[randomCol]).color, determineStyle(name[randomCol]).brdrColor, determineStyle(name[randomCol]).brdrRadius);
        newLetter.style.animationDelay = `${i * 0.2}s`;

        visitedCols.push(randomCol);
        currCol.appendChild(newLetter);
    };
};

document.addEventListener('DOMContentLoaded', () => Root());