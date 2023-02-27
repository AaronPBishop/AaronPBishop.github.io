const consonants = ['R', 'N', 'B', 'S', 'H', 'P'];
const vowels = ['A', 'O', 'I'];

const consonantColors = () => {
    const colors = ['rgb(10, 30, 95)', 'rgb(5, 15, 80)'];

    return colors[Math.floor(Math.random() * colors.length)];
};

const vowelColors = () => {
    const colors = ['rgb(215, 0, 64)', 'rgb(227, 11, 92)'];

    return colors[Math.floor(Math.random() * colors.length)];
};

const determineStyle = (letter) => {
    if (consonants.includes(letter)) {
        return {
            color: consonantColors(),
            brdrColor: 'rgb(40, 0, 65)',
            brdrRadius: '100vh'
        };
    };
    
    if (vowels.includes(letter)) {
        return {
            color: vowelColors(),
            brdrColor: 'rgb(139, 0, 0)',
            brdrRadius: '2.5vh'
        };
    };
};

export default determineStyle;