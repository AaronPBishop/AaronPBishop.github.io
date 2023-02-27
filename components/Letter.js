const Letter = (ltr, color, brdrClr, brdrRadius) => {
    const newLetter = document.createElement('div');
    const markup = `
        <div 
        style="font-size: 1.5em; text-align: center; color: white; line-height: 8vh; letter-spacing: -3px; text-shadow: 0px 0px 2.5px white;">
            ${ltr}
        </div>
    `;

    newLetter.classList.add('letter-elements');
    newLetter.innerHTML = markup;
    newLetter.style.width = '4vw';
    newLetter.style.height = '8.4vh';
    newLetter.style.backgroundColor = color;
    newLetter.style.border = `2px solid ${brdrClr}`;
    newLetter.style.borderRadius = brdrRadius;

    return newLetter;
};

export default Letter;