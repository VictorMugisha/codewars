

function findUniq(arr) {
    const used = []
    const stats = []
    arr.forEach((number, index, self) => {
        if (!used.includes(number)) {
            let similarCount = self.filter(num => num === number).length
            stats.push({similarCount, number})
        }

        used.push(number)
    })

    console.log(stats)
    console.log(stats.filter(stat => stat.similarCount === 1)[0].number)
    return stats.filter(stat => stat.similarCount === 1)[0].number
}

findUniq([ 1, 1, 1, 2, 1, 1 ])