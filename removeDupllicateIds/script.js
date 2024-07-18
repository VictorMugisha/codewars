function removeDuplicateIds(obj) {
    const charOwnership = {};
    
    // Identify the latest key that should own each character
    for (const key in obj) {
      const chars = obj[key];
      chars.forEach(char => {
        charOwnership[char] = key;
      });
    }
  
    // Create a new result object
    const result = {};
    for (const key in obj) {
      result[key] = [];
    }
  
    // Add characters to their respective owners in result
    for (const key in obj) {
      const chars = obj[key];
      chars.forEach(char => {
        if (charOwnership[char] === key && !result[key].includes(char)) {
          result[key].push(char);
        }
      });
    }
  
    return result;
  }
  
const obj = {
    "1": ["A", "B", "C"],
    "2": ["A", "B", "D", "A"],
};

const obj1 = {
    "1": ["C", "F", "G"],
    "2": ["A", "B", "C"],
    "3": ["A", "B", "D"],
};

const obj2 = {
    "1": ["A"],
    "2": ["A"],
    "3": ["A"],
};

const result = removeDuplicateIds(obj);
const result1 = removeDuplicateIds(obj1);
const result2 = removeDuplicateIds(obj2);

console.log(result);
console.log();
console.log(result1);
console.log();
console.log(result2);