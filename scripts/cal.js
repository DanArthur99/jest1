function addition(a, ...b) {
    if (a === undefined || typeof a != "number") {
        throw new Error("You must provide a number")
    } else {
        let total = 0;
        for (let number of b) {
            total += number;
        }
        return a + total;
    }
}

module.exports = addition;