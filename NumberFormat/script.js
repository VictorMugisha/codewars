var numberFormat = function (number) {
    const stringNumber = Math.abs(number).toString(); // Convert number to string and handle negative sign
    const length = stringNumber.length;
    const result = [];

    for (let i = 0; i < length; i++) {
        // Insert comma every 3 digits from the right
        if (i > 0 && (length - i) % 3 === 0) {
            result.push(',');
        }
        result.push(stringNumber[i]);
    }

    // Handle negative sign if present
    if (number < 0) {
        result.unshift('-');
    }

    return result.join('');
};

// Test cases
console.log(numberFormat(100000));    // Output: '100,000'
console.log(numberFormat(5678545));   // Output: '5,678,545'
console.log(numberFormat(-420902));   // Output: '-420,902'
