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
  
    const box1 = document.getElementById('header-box1');
    const box2 = document.getElementById('header-box2');
  
    for (let i = 0; i < name.length; i++) {
        const newCol = document.createElement('div');
        newCol.classList.add('columns');
        newCol.style.width = '3.6vw';
        newCol.style.height = '7.6vh';
        newCol.style.marginRight = '0.8vw';
        newCol.style.marginLeft = '0.8vw';

        if (i <= 5) {
            box1.append(newCol);

            newCol.id = `col${i}`;
            cols.push(i);
        }

        if (i > 5) {
            box2.append(newCol);

            newCol.id = `col${i}`;
            cols.push(i);
        }
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