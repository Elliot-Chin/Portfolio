const sleep = (ms) => {
    return new Promise(r => setTimeout(r, ms))
}

const delay = (p) => {
    return new Promise((resolve) => {
        setTimeout(resolve, Math.floor(Math.random() * (2000 - 1000 + 1) + 1000))
    }).then(() => p)
}

export { sleep, delay };
