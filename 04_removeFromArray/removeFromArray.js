const removeFromArray = function(array) // can pass as many arguments as desired
{
    for (let i = 1; i < arguments.length; ++i)
    {
        const removeIndex = array.indexOf(arguments[i]);

        if (removeIndex === -1) // returns -1 if array element isn't found.
            continue;

        array.splice(removeIndex, 1)
    }

    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
