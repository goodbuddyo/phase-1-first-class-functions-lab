// Code your solution in this file!

let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (myDrivers) {
  console.log(myDrivers.slice(0, 2));
  return myDrivers.slice(0, 2);
}
returnFirstTwoDrivers(drivers);


const returnLastTwoDrivers = function (myDrivers) {
  console.log(myDrivers.slice(2));
  return myDrivers.slice(2);
}
returnLastTwoDrivers(drivers);

const selectingDrivers = []
selectingDrivers.push(returnFirstTwoDrivers, returnLastTwoDrivers)
console.log(selectingDrivers.length);


const createFareMultiplier = function (multiplyInteger) {
  let fare = 1;
  const fareMultiplier = function (fare) {
    return fare * multiplyInteger;
  }
  return fareMultiplier
}
createFareMultiplier(4);



const fareDoubler = function (fare = 2) {
  return createFareMultiplier(2)(fare)
}
console.log(fareDoubler(5));
fareDoubler(5)



const fareTripler = function (fare = 2) {
  return createFareMultiplier(3)(fare)
}
console.log(fareTripler(5));
fareTripler(5)

const selectDifferentDrivers = function (driversArray, driverFn) {
  if (driverFn === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(driversArray)
  } else if (driverFn === returnLastTwoDrivers) {
    return returnLastTwoDrivers(driversArray)
  } else {
    console.log('Must submit first or last driver function')
  }

}
selectDifferentDrivers(drivers, returnFirstTwoDrivers)
