const charToNum = {
    'A': '0', 'B': '1', 'C': '2', 'D': '3', 'E': '4', 'F': '5', 'G': '6', 'H': '7', 'I': '8', 'J': '9',
    'K': '⁰', 'L': '¹', 'M': '²', 'N': '³', 'O': '⁴', 'P': '⁵', 'Q': '⁶', 'R': '⁷', 'S': '⁸', 'T': '⁹',
    'U': '₀', 'V': '₁', 'W': '₂', 'X': '₃', 'Y': '₄', 'Z': '₅', ' ': '₆'
};

const numToChar = Object.fromEntries(Object.entries(charToNum).map(([k, v]) => [v, k]));

function encrypt() {
    const input = document.getElementById('input').value.toUpperCase();
    let output = '';
    for (let char of input) {
        output += charToNum[char] || char;
    }
    document.getElementById('output').value = output;
}

function decrypt() {
    const input = document.getElementById('input').value;
    let output = '';
    for (let char of input) {
        output += numToChar[char] || char;
    }
    document.getElementById('output').value = output;
}
