const palindromes = function (str) {
    let normalizedString = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
    let reversedString = normalizedString.split('').reverse().join('');
    if (normalizedString === reversedString) {
        return true;
    } else {
        return false;
    }
};


// Do not edit below this line
module.exports = palindromes;
