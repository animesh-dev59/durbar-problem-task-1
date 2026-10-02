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