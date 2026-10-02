/** problem consept */
function getMonthName(monthNumber) {
    if (monthNumber === 1) {
        return "January";
    } else if (monthNumber === 2) {
        return "February";
    } else if (monthNumber === 3) {
        return "March";
    } else if (monthNumber === 4) {
        return "April";
    } else if (monthNumber === 5) {
        return "May";
    } else if (monthNumber === 6) {
        return "June";
    } else if (monthNumber === 7) {
        return "July";
    } else if (monthNumber === 8) {
        return "August";
    } else if (monthNumber === 9) {
        return "September";
    } else if (monthNumber === 10) {
        return "October";
    } else if (monthNumber === 11) {
        return "November";
    } else if (monthNumber === 12) {
        return "December";
    }
} 
console.log(getMonthName(1))


function countNumberProperties(numbers) {
    let result = {
        even: 0,
        odd: 0,
        positive: 0,
        negative: 0
    };

    for (let num of numbers) {
        if (num % 2 === 0) {
            result.even++;
        } else {
            result.odd++;
        }

        if (num > 0) {
            result.positive++;
        } else if (num < 0) {
            result.negative++;
        }
    }

    return result;
}
// console.log(countNumberProperties([1]));

function checkMathOperationsForNine(a, b) {
    const sum = a + b;
    const diff = a - b;
    const product = a * b;
    const quotient = a / b;

    if (sum === 9 || diff === 9 || product === 9 || quotient === 9) {
        return "Nine";
    } else {
        return "Nein";
    }
}
console.log(checkMathOperationsForNine(1,3))


function extractBodyContent(htmlString) {
    const startTag = '<body>';
    const endTag = '</body>';
    
    const startIndex = htmlString.indexOf(startTag);
    const endIndex = htmlString.indexOf(endTag);
    
    if (startIndex === -1 || endIndex === -1) return '';
    
    return htmlString.substring(startIndex + startTag.length, endIndex);
} 


function calculateRemainingMoney(totalMoney, cakeCost, donutCost) {

    let moneyAfterCake = totalMoney - cakeCost;

  
    if (moneyAfterCake < 0) {
        return moneyAfterCake;
    }

    return moneyAfterCake % donutCost;
}
