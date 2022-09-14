// Code your solution here
function findMatching(drivers, name) {
   return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase()) ///strict equal - return value array
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.slice(0, letters.length) === letters)
        // return driver.slice(0, letters.length) === letters
    // give a starting and ending point or it'll start at point and go until end
    // letter = "As" = first 2 of Ashley
    // drivers[0] = "A"
} 

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase())
}
