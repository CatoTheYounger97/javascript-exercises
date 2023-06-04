const reverseString = function( string ) 
{
    let stringAsArray = string.split("");

    let revString = stringAsArray.reverse().toString();

    return revString.replaceAll(",", "");

};

// Do not edit below this line
module.exports = reverseString;
