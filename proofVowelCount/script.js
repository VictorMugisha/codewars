function getCount(str) {

    let vowels = "aiueo"
    let inputStr = typeof str === "string" ? str : String(str)


}
  


function getCount(...inputs) {
    // Handle no input case
    if (inputs.length === 0) {
        return 0;
    }

    // Initialize the count
    let count = 0;
    
    // Define the vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // Convert inputs to a single string representation and concatenate them
    let str = inputs.map(input => {
        // Handle Promises (async functions return Promises)
        if (input instanceof Promise) {
            return '';
        } else if (input instanceof Map) {
            // Convert Map to string concatenating its values
            return Array.from(input.values()).join('');
        } else if (typeof input === 'symbol') {
            // Convert Symbol to string
            return String(input.description);
        } else if (Array.isArray(input)) {
            // For arrays, join their elements as strings
            return input.join('');
        } else if (typeof input === 'object' && input !== null && !(input instanceof RegExp)) {
            // For objects that are not null or regex, and not maps, set to empty string
            return '';
        } else {
            return String(input);
        }
    }).join('');

    // Iterate through the string and count the vowels
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}