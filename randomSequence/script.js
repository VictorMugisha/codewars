function Randomizer(min, max) {
    this.generateLength =  max - min + 1
    this.generatedArray = []
    for (let i = 0; i < this.generateLength; i++) {
        this.generatedArray.push(min++)
    }
}

Randomizer.prototype.next = function () {
    if (this.generateLength === 0) throw new Error('No more numbers');

    let randomIndex = Math.floor(Math.random() * this.generateLength);
    
    this.generateLength--
    return this.generatedArray.splice(randomIndex, 1).join('');
};

Randomizer.prototype.sequence = function (size) {
    if (size === undefined) {
        this.generateLength = 0
        return this.generatedArray.splice(0)
    } else if (size > this.generateLength) throw new Error('Too many numbers');

    let randomArray = []

    for (let s = 0; s < size; s++) {
        let ranIn = Math.floor(Math.random() * this.generateLength)
        if (!randomArray.includes(this.generatedArray[ranIn])) {
            randomArray.push(this.generatedArray[ranIn])
            this.generatedArray.splice(ranIn, 1)
            this.generateLength--
        }
    }
    
    return randomArray;
};

const test = new Randomizer(1, 6)
console.log(test.generatedArray)
console.log(test.next())
// console.log(test.generatedArray)

console.log(test.sequence())