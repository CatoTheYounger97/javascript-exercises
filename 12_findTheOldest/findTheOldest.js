const findTheOldest = function(array) {

    const currentYear = new Date().getFullYear();

    array.sort( (a, b) => {

        const lifeA = ("yearOfDeath" in a) ? a.yearOfDeath : currentYear;
        const lifeB = ("yearOfDeath" in b) ? b.yearOfDeath : currentYear; 

         const aAge = lifeA - a.yearOfBirth;
         const bAge = lifeB - b.yearOfBirth;

        if (aAge < bAge)
            return 1;
        else if (aAge > bAge)
            return -1;
        else return 0;
    });
  
    return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
