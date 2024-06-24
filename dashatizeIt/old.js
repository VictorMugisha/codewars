/**
 * 
 * 
    1. wasOdd needs to start as false
    loop:
        2. for each number, check if the previous was odd
        3. if so, write the number with '-' in front of it
        4. check if the current number is also odd and update wasOdd variable accordingly
    goto loop:

 */

    function dashatize(num) {
        const digits = num < 0 ? (num * -1).toString().split('') : num.toString().split('')
        if (digits.length === 1) {
            console.log(digits.join(''))
            return
        }
        let result = ""
        let wasOdd = false
        for (let digit of digits) {
    
            if (isLast(digit, digits)) {
                if (isLast(digit, digits) && isOdd(digit)) {
                    result += '-' + digit
                } else if (isLast(digit, digits)) {
                    result += digit
                }
            } else {
                if (isOdd(digit)) {
                    if (wasOdd === true || isFirst(digit, digits)) {
                        if (isLast(digit, digits)) result += `${digit}`
                        else result += `${digit}-`
                    } else {
                        if (isLast(digit, digits)) {
                            result += `-${digit}`
                        } else {
                            result += `-${digit}-`
                        }
                    }
                    wasOdd = true
                } else {
                    result += digit
                    wasOdd = false
                }
            }
    
            if (isOdd(digit)) wasOdd = true
            else wasOdd = false
        }
        console.log(result)
        return ""
    }
    
    
    function isOdd(num) {
        return num % 2 !== 0
    }
    
    function isFirst(num, arr = []) {
        return arr.indexOf(num) === 0
    }
    
    function isLast(num, arr = []) {
        return arr.indexOf(num) === arr.length - 1
    }
    
    
    dashatize('')
    dashatize(6815)
    
    dashatize(274)
    dashatize(5311)
    dashatize(86320)
    dashatize(974302)
    dashatize(0)
    dashatize(-1)
    dashatize(-28369)