const palindromes = function (string) {
    string = string.toLowerCase();
  
    let stringArray = string.split("");
    const charCodeA = "a".charCodeAt(0);
    const charCodeZ = "z".charCodeAt(0);
  
    for (let i = 0; i < stringArray.length ; ++i)
    {
      const charCode = stringArray[i].charCodeAt(0);
  
      if (charCode < charCodeA || charCode > charCodeZ)
        stringArray[i] = "";
    }
    
    stringFiltered = stringArray.join("");
    stringFilteredRev = stringArray.reverse().join("");
  
    return stringFiltered === stringFilteredRev;
};

// Do not edit below this line
module.exports = palindromes;
