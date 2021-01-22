
function kilometerToMeter(kilometer) {
    kilometer = parseFloat(kilometer); //If someone accidentally provides string as an input.//
    kilometer = kilometer.toFixed(5); //If the input has too many decimal numbers.//
    if (kilometer < 0) {
        return "Please provide appropriate input. Distance can't be negative.";
    }
    var meter = kilometer * 1000;
    return meter;
}

function budgetCalculator(clock, phone, laptop) {
    clock = parseInt(clock); //I have used parseInt() for these three input parameters so that if someone accidentally provides string or decimal number as an input.//
    phone = parseInt(phone);
    laptop = parseInt(laptop);
    if (clock < 0 || phone < 0 || laptop < 0) {
        return "Please provide appropriate input. Number of clock, phone or laptop purchased can't be negative.";
    }
    var clockAmount = clock * 50;
    var phoneAmount = phone * 100;
    var laptopAmount = laptop * 500;
    var totalAmount = clockAmount + phoneAmount + laptopAmount;
    return totalAmount;
}

function hotelCost(numOfDays) {
    numOfDays = Math.ceil(numOfDays); //I have assumed that the hotel will not consider partial payment for a day. For example if a customer wants to stay 10.5 days (meaning 10 days and 12 hours), still he/she needs to make a full payment of 11 days. Also Math.ceil() converts a string into a number.//
    if (numOfDays < 0) {
        return "Number of days can't be negative. Please provide appropriate number of days you wish to stay.";
    }
    var totalCost = 0;
    if (numOfDays <= 10) {
        var first10Days = numOfDays * 100;
        totalCost = first10Days;
    }
    else if (numOfDays <= 20) {
        var first10Days = 10 * 100;
        var remaining = numOfDays - 10;
        var second10Days = remaining * 80;
        totalCost = first10Days + second10Days;
    }
    else {
        var first10Days = 10 * 100;
        var second10Days = 10 * 80;
        var remaining = numOfDays - 20;
        var moreThan20Days = remaining * 50;
        totalCost = first10Days + second10Days + moreThan20Days;
    }
    return totalCost;
}

function megaFriend(friends) {
    if (friends == '') {
        return "Please provide an input of array whose elements are strings.";
    }
    var maxLength = 0;
    var position = 0;
    for (var i = 0; i < friends.length; i++) {
        var length = 0;
        var element = '';
        element = friends[i];
        length = element.length;
        if (length == undefined) { //This condition is used to avoid array with numbers as input
            return "Please provide an input of array whose elements are strings.";
        }
        else if (length > maxLength) {
            maxLength = length;
            position = i;
        }
    }
    return friends[position];
}