// const findTheOldest = function (arr) {
//     arr.sort(function (a, b) {

//         if (!a.yearOfDeath) { a.yearOfDeath = new Date().getFullYear(); }

//         if (!b.yearOfDeath) { b.yearOfDeath = new Date().getFullYear(); }

//         let aAge = a.yearOfDeath - a.yearOfBirth;
//         let bAge = b.yearOfDeath - b.yearOfBirth;
//         return bAge - aAge;
//     })
//     return arr[0];

// };


//Now Lets try using other methods that are optimal

const getAge = function (birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};


const findTheOldest = function (people) {
    return people.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentPersonAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);

        return oldestAge < currentPersonAge ? currentPerson : oldest;
    });
}
//
// Do not edit below this line
module.exports = findTheOldest;
