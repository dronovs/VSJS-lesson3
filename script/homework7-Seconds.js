const userHours = +prompt('Please enter a number of hours');

let hoursToSeconds = (variable) => {
    return variable * 60 * 60;
}

alert(hoursToSeconds(userHours));

