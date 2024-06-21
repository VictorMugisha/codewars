
const setT1 = () => {
    return setTimeout(() => {
        console.log("First one")
    }
    , 3000)
}

const setT2 = () => {
    return setTimeout(() => {
        console.log("Second one")
    }
    , 5000)
}

const setT3 = () => {
    return setTimeout(() => {
        console.log("Third one")
    }
    , 7000)
}

async function getData() {
    let p1 = await setT1()
    console.log(p1);
    let p2 = await setT2()
    console.log(p2);
    let p3 = await setT3()
    console.log(p3);
}

getData()


