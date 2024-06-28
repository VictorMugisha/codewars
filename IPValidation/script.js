
function isValidIP(str = '') {

    if (str.includes(' ')) {
        return false
    }

    let wasDot = false
    for (let i = 0; i < str.length; i++) {
        if (str[0] === '.' || str[str.length - 1] === '.') {
            return false
        }
        let current = str[i]
        if (current === '.') {
            if (wasDot) return false
            wasDot = true
        }
    }

    const octects = str.split('.')
    if (octects.length !== 4) {
        return false
    }

    for (octect of octects) {
        if (isNaN(octect)) {
            return false
        }
        if (Number(octect) < 0 || Number(octect) > 255) {
            return false
        }
        if (octect[0] == '0' && octect.length > 1) {
            return false
        }

        if (octect.includes(' ') || octect.includes('\n') || octect.includes('\\')) {
            return false
        }
        if (octect.includes("e")) {
            return false
        }
    }

    return true;
}


console.log(isValidIP("0.0.0.0")) //true);
console.log(isValidIP("12.255.56.1")) //true);
console.log(isValidIP("137.255.156.100")) // true);
console.log(isValidIP('')) //false);
console.log(isValidIP('abc.def.ghi.jkl')) //false);
console.log(isValidIP('123.456.789.0')) //false);
console.log(isValidIP('12.34.56')) //false);
console.log(isValidIP('01.02.03.04')) //false);
console.log(isValidIP('256.1.2.3')) //false);
console.log(isValidIP('1.2.3.4.5')) //false);
console.log(isValidIP('123,45,67,89')) //false);
console.log(isValidIP('1e0.1e1.1e2.2e2')) //false);
console.log(isValidIP(' 1.2.3.4')) //false);
console.log(isValidIP('1.2.3.4 ') )//false);
console.log(isValidIP('12.34.56.-7')) //false);
console.log(isValidIP('1.2.3.4\n')) //false);
console.log(isValidIP('\n1.2.3.4')) //false);
