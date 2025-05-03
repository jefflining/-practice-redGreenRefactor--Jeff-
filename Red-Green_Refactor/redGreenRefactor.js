// Minimal code from the Green phase:

// function countVowels(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === "a" || "e" || "i" || "o" || "u") {
//         } {
//             count++;
//         }
        
//         }
//         return count;
//     }


function countVowels(str) {
    let count = 0;
    if (str === undefined) {
        return ("String is undefined");
    } else if (str !== undefined) {
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