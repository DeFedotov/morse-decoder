const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here

    let morseCode = result(expr);
    return morseCode.map(item => {
        
        item = item.replace(/10/g, '.')
        .replace(/11/g, '-')
        .replace(/0/g, '');

        while(item === '**********'){
            return ' ';
        }

        return MORSE_TABLE[item];

    }).join('');
}

function result(str){
    let phrase = [];
    let letters = str.split('');
    let temp = '';    

    letters.forEach(element => {
        
        temp = temp + element;  
        if(temp.length === 10) { 
            phrase.push(temp);
            temp = '';
        }     
    });
    return phrase;
}

module.exports = {
    decode
}