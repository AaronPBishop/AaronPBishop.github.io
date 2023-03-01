const Letter = (ltr, color, brdrClr, brdrRadius) => {
    const newLetter = document.createElement('div');
    const markup = `
        <div 
        style="font-size: 1.2em; text-align: center; color: white; line-height: 8vh; letter-spacing: -1px; text-shadow: 0px 0px 2.5px white;">
            ${ltr}
        </div>
    `;

    newLetter.classList.add('letter-elements');
    newLetter.innerHTML = markup;
    newLetter.style.backgroundColor = color;
    newLetter.style.border = `2px solid ${brdrClr}`;
    newLetter.style.borderRadius = brdrRadius;
    newLetter.style.aspectRatio = '21 / 1';
    
    return newLetter;
};

export default Letter;