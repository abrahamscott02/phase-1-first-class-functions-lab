// Code your solution in this file!
function returnFirstTwoDrivers(){
    const fullArray = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    const returnFirstTwoDrivers = fullArray.slice(0,2)
    return returnFirstTwoDrivers;
}

function returnLastTwoDrivers(){
    const fullArray = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    const returnLastTwoDrivers = fullArray.slice(2,4);
    return returnLastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiply){
    return function(value){
        return multiply * value;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, funName){
    return funName(arrayOfDrivers);
    
}
