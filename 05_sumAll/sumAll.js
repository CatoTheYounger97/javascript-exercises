const sumAll = function(a, b) 
{
    if (a < 0 
        || b < 0 
        || typeof(a) != "number" 
        || typeof(b) != "number") 
        return "ERROR";

    let bigNum = b;
    let smolNum = a;
    if ( a > b) {
        bigNum = a;
        smolNum = b;
    }

    let sumNum = 0;
    for (let i = smolNum; i <= bigNum; ++i)
    {
        sumNum += i;        
    }

    return sumNum;


};

// Do not edit below this line
module.exports = sumAll;
