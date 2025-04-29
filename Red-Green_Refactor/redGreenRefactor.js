function countVowels(str) {
    let count = 0;
    if (str === undefined) {
        return ("String is undefined");
    } else {
        const formattedString = str.toLowerCase();
        for (let i = 0; i < formattedString.length; i++) {
            if (formattedString[i] === "a" || 
                formattedString[i] === "e" || 
                formattedString[i] === "i" || 
                formattedString[i] === "o" || 
                formattedString[i] === "u"
            ) {
                count++;
            }
        }
    }
    return count;
}



module.exports = countVowels;