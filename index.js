const returnFirstTwoDrivers = function(arrayNames){
    return [arrayNames[0],arrayNames[1]]
}

const returnLastTwoDrivers = function (arrayNames){
    return arrayNames.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    return function(fare) {return multiplier * fare}
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayNames, func){
    return func(arrayNames)
}

