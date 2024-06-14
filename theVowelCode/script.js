function encode(string = "") {
    const vowels = new Map()
    vowels.set('a', 1)
    vowels.set('e', 2)
    vowels.set('i', 3)
    vowels.set('o', 4)
    vowels.set('u', 5)
    return string.split('').map(char => "aeiou".includes(char) ? vowels.get(char) : char).join('')
}

function decode(string) {
    const vowels = new Map()
    vowels.set(1, 'a')
    vowels.set(2, 'e')
    vowels.set(3, 'i')
    vowels.set(4, 'o')
    vowels.set(5, 'u')
    return string.split('').map(char => "12345".includes(char) ? vowels.get(Number(char)) : char).join('')
}

console.log(encode("How are you today?"))
console.log(decode("h3 th2r2"))