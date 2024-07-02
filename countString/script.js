function count(string) {
    const arr = string.split('')
    const used = []
    const result = {}
    for (let character of arr) {
        if (!used.includes(character)) {
            const count = arr.filter(char => char === character).length
            result[character] = count
            used.push(character)
        }
    }
    console.log(result)
    return result;
}

count("abana")
count("")