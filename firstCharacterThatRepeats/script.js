function firstDup(string) {
    for (let char of string) {
        if (string.indexOf(char) !== string.lastIndexOf(char)) {
            return char
        }
    }
}

console.log(firstDup('tweet')); // 't'
console.log(firstDup('Ode to Joy')); // ' '
console.log(firstDup('ode to joy')); // 'o'
console.log(firstDup('bar')); // undefined
console.log(firstDup('123123')); // '1'
console.log(firstDup('!@#$!@#$')); // '!'