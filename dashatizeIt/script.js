
function dashatize(num) {
    return num = num.toString().split("").map(function (c) {
        return c % 2 ? "-" + c + "-" : c;
    }).join("").split("-").filter(a => a != "").join("-")
}


console.log(dashatize(''), " Should be ''")
console.log(dashatize(6815), " Should be 68-1-5")

console.log(dashatize(274), " Should be 2-7-4")
console.log(dashatize(5311), " Should be 5-3-1-1")
console.log(dashatize(86320), " Should be 86-3-20")
console.log(dashatize(974302), " Should be 9-7-4-3-02")
console.log(dashatize(0), " Should be 0")
console.log(dashatize(-1), " Should be 1")
console.log(dashatize(-28369), " Should be 28-3-6-9")

// console.log("1230-".endsWith("-"))