
function findUniq(arr) {
    const normalize = arr.map(element => element.toLowerCase())
    for (let index in normalize) {
        let word = normalize[index]
        let copy = [...normalize]
        for (let char of word) {
            copy.splice(index, 1).join('')
            if (copy.filter(c => c.includes(char)).length > 1) {
                break
            } else {
                return arr[index]
            }
        }
    }
}

console.log(findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]))